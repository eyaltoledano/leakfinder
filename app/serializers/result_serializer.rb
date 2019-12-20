class ResultSerializer < ActiveModel::Serializer
  attributes :id, :calculation_id, :runrate, :conversion_rates, :conversion_values, :leaking_volume

end
