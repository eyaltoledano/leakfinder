class CalculationSerializer < ActiveModel::Serializer

  attributes :id, :name, :time_dimension, :result_url

  has_many :assumptions, serializer: CalculationAssumptionsSerializer
  has_many :funnel_steps, serializer: CalculationFunnelStepsSerializer

  def result_url
    if object.result
      "/api/calculations/#{object.id}/result"
    end
  end

end
