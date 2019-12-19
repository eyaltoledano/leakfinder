class Result < ApplicationRecord
  belongs_to :calculation

  def currencify(num)
    sprintf("%.2f",num)
  end

  def runrate

    aov = self.calculation.assumptions.detect {|a| a.name == 'Average order value' || 'Average Order Value' || 'average order value'}.value

    last_step_volume = self.calculation.funnel_steps.to_a.last.value.to_i

    revenue_for_dimension = last_step_volume * aov

    time_dimension = self.calculation.time_dimension

    if time_dimension === 1
      {
        daily: currencify(revenue_for_dimension),
        weekly: currencify(revenue_for_dimension * 7),
        monthly: currencify(((revenue_for_dimension * 7) * 4)),
        yearly: currencify((((revenue_for_dimension * 7) * 4) * 12))
      }
    elsif time_dimension === 7
      {
        daily: currencify((revenue_for_dimension / 7)),
        weekly: currencify(revenue_for_dimension),
        monthly: currencify((revenue_for_dimension * 4)),
        yearly: currencify(((revenue_for_dimension * 4) * 12))
      }
    elsif time_dimension === 30
      {
        daily: currencify(((revenue_for_dimension / 4) / 7)),
        weekly: currencify((revenue_for_dimension / 4)),
        monthly: currencify(revenue_for_dimension),
        yearly: currencify((revenue_for_dimension * 12))
      }
    elsif time_dimension === 365
      {
        daily: currencify((((revenue_for_dimension / 12) / 4) / 7)),
        weekly: currencify(((revenue_for_dimension / 12) / 4)),
        monthly: currencify((revenue_for_dimension / 12)),
        yearly: currencify(revenue_for_dimension)
      }
    end
  end

  def conversion_rates
    output = {}
    funnel_steps = self.calculation.funnel_steps
    steps = funnel_steps.each do |step|
      unless step == funnel_steps.last
        next_step = funnel_steps.detect {|s| s.id == step.id + 1}

        stage = step.name + " to " + next_step.name

        conversion_rate = currencify((next_step.value.percent_of(step.value) / 100).round(3))

        output[stage] = conversion_rate
      end
    end
    output
  end

  def conversion_values
    output = {}

    conversion_rates = self.conversion_rates

    aov = self.calculation.assumptions.detect {|a| a.name == 'Average order value' || 'Average Order Value' || 'average order value'}.value

    funnel_steps ||= self.calculation.funnel_steps
    last_step ||= funnel_steps.last
    last_step.conversion_value ||= aov
    last_step.save
    output[last_step.name.to_s.titlecase] ||= currencify(aov)

    funnel_steps.reverse.each do |step|
      unless step == funnel_steps.first
        previous_step = funnel_steps.detect {|s| s.id == step.id - 1}
        previous_step_value ||= previous_step.value
        conversion_rate ||= step.value.percent_of(previous_step_value)

        previous_step.conversion_value ||= (step.conversion_value * (conversion_rate / 100)).to_f.round(2)

        output["#{previous_step.name.to_s.titlecase}"] ||= currencify(previous_step.conversion_value)
      end
    end

    output
  end

  def leaking_volume
    output = {}

    funnel_steps = self.calculation.funnel_steps
    conversion_rates = self.conversion_rates
    conversion_values = self.conversion_values

    conversion_rates.keys.each do |k|
      output[k] = ""
    end

    incompletes = {}

    funnel_steps.each do |step|
      unless step == funnel_steps.last
        next_step = funnel_steps.detect {|s| s.id == step.id + 1}
        stage = step.name + " to " + next_step.name
        incompletes[stage] = currencify(((step.value - next_step.value) * next_step.conversion_value).round(2))
      end
    end
    incompletes
  end
end
