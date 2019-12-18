class ResultSerializer < ActiveModel::Serializer
  attributes :id, :assumptions

  def assumptions
    object.calculation.assumptions
  end

end
