class ResultSerializer < ActiveModel::Serializer
  attributes :id, :runrate, :conversion_rates

  def runrate
    object.runrate
  end

  def conversion_rates
    object.conversion_rates
  end

end
