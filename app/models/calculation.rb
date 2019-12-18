class Calculation < ApplicationRecord
  belongs_to :user
  has_many :assumptions
  has_many :funnel_steps
  has_one :result

  
end

class Numeric
  def percent_of(n)
    self.to_f / n.to_f * 100.0
  end
end
