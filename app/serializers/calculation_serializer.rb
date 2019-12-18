class CalculationSerializer < ActiveModel::Serializer
  attributes :id, :name, :time_dimension, :belongs_to
end
