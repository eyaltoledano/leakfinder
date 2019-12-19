class ResultSerializer < ActiveModel::Serializer
  attributes :id, :runrate, :funnel_breakdown

  def runrate
    object.runrate
  end

  def funnel_breakdown
    object.funnel_breakdown
  end

end
