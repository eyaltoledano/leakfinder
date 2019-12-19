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

  def funnel_breakdown
    # returns a hash with dynamic values, where the key is a concatenation of the current key, "to" and the next key and the value is
    # i.e. {
    # =>     "Visit to Purchase": "0.09"
    # =>   }
  end

  def conversion_values
    # uses the conversion rate of funnel_breakdown { "Visit to Purchase": "0.09" } with the volume of each step to determine the value of each funnel_breakdown item by multiplying the AOV
    # aov = 150
    #

    aov = self.calculation.assumptions.detect {|a| a.name == 'Average order value' || 'Average Order Value' || 'average order value'}.value
    steps = self.calculation.funnel_steps
    # funnel_breakdown = self.funnel_breakdown
    funnel_breakdown = { "Visit to Purchase": "0.09"} # stub out

    # 1. get the last funnel step  and attach aov to it
    last_step = steps.to_a.last.name # Purchase
    second_to_last_step = funnel_breakdown.to_a.last[0].to_s.split[0] # Visit
    last_step_value = aov # 150

    # 2. once we know the value of the last step, finds its conversion rate in the funnel breakdown
    query = second_to_last_step + " to " + last_step
    conversion_rate = funnel_breakdown[:"#{query}"]


    # 3. Finally,
  end

  def leaking_volume
  end
end
