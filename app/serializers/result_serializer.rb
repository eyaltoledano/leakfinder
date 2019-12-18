class ResultSerializer < ActiveModel::Serializer
  attributes :id
  has_one :calculation
end
