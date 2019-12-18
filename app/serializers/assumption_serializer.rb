class AssumptionSerializer < ActiveModel::Serializer
  attributes :id, :name, :value
  has_one :calculation
end
