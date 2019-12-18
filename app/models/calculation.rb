class Calculation < ApplicationRecord
  belongs_to :user
  has_many :assumptions
  has_many :funnel_steps
  has_one :result

  

end
