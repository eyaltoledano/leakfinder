class Result < ApplicationRecord
  belongs_to :calculation

  def runrate
    aov = self.calculation.assumptions.detect {|a| a.name == 'Average order value' || 'Average Order Value' || 'average order value'}.value

    last_step_volume = self.calculation.funnel_steps.to_a.last.value.to_i

    revenue_for_dimension = last_step_volume * aov

    time_dimension = self.calculation.time_dimension

    if time_dimension === 1
      {
        daily: revenue_for_dimension,
        weekly: revenue_for_dimension * 7,
        monthly: ((revenue_for_dimension * 7) * 4),
        yearly: (((revenue_for_dimension * 7) * 4) * 12)
      }
    elsif time_dimension === 7
      {
        daily: (revenue_for_dimension / 7),
        weekly: revenue_for_dimension,
        monthly: (revenue_for_dimension * 4),
        yearly: ((revenue_for_dimension * 4) * 12)
      }
    elsif time_dimension === 30
      {
        daily: ((revenue_for_dimension / 4) / 7),
        weekly: (revenue_for_dimension / 4),
        monthly: revenue_for_dimension,
        yearly: (revenue_for_dimension * 12)
      }
    elsif time_dimension === 365
      {
        daily: (((revenue_for_dimension / 12) / 4) / 7),
        weekly: ((revenue_for_dimension / 12) / 4),
        monthly: (revenue_for_dimension / 12),
        yearly: revenue_for_dimension
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

        conversion_rate = (next_step.value.percent_of(step.value) / 100).round(3)

        output[stage] = conversion_rate
      end
    end
    output
  end

  def conversion_values
    output = {}

    conversion_rates = self.conversion_rates

    aov = self.calculation.assumptions.detect {|a| a.name == 'Average order value' || 'Average Order Value' || 'average order value'}.value

    funnel_steps = self.calculation.funnel_steps
    last_step = funnel_steps.last
    last_step.conversion_value = aov
    last_step.save
    output[last_step.name.to_s.titlecase] = aov.to_f

    funnel_steps.reverse.each do |step|
      unless step == funnel_steps.first
        previous_step = funnel_steps.detect {|s| s.id == step.id - 1}
        previous_step_value = previous_step.value
        conversion_rate = step.value.percent_of(previous_step_value)

        previous_step.conversion_value = step.conversion_value * (conversion_rate / 100)

        output["#{previous_step.name.to_s.titlecase}"] = previous_step.conversion_value
      end
    end
    
    output
  end

  def leaking_volume
  end
end











# aov = self.calculation.assumptions.detect {|a| a.name == 'Average order value' || 'Average Order Value' || 'average order value'}.value
# steps = self.calculation.funnel_steps
# # funnel_breakdown = self.funnel_breakdown
# funnel_breakdown = { "Visit to Purchase": "0.09"} # stub out
#
# # 1. get the last funnel step  and attach aov to it
# last_step = steps.to_a.last.name # Purchase
# second_to_last_step = funnel_breakdown.to_a.last[0].to_s.split[0] # Visit
# last_step_value = aov # 150
#
# # 2. once we know the value of the last step, finds its conversion rate in the funnel breakdown
# query = second_to_last_step + " to " + last_step
# conversion_rate = funnel_breakdown[:"#{query}"]
