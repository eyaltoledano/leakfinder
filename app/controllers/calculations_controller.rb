class CalculationsController < ApplicationController

  def index
    @calculations = Calculation.all
    render json: @calculations
  end

  def create
    binding.pry
    @user = User.new(email: params[:email])
    binding.pry
    @calculation = @user.calculations.create(params[:calculation])
    binding.pry
    @calculation.result = Result.new
    binding.pry
    render json: @calculation
    # params needs to look like
    # {
    #   email: 'test@test.com',
    #   calculation: {
    #     name: "Ecommerce Test Funnel",
    #     time_dimension: 30,
    #     assumptions: { average_order_value: 150 },
    #     funnel_steps: { "visits": "1000", "purchases": "90", "retained": "76" }
    # }

    # for that user, create the calculation
    # create the result for the calculator
    # then render json of the calculation
  end

  def show
    @calculation = Calculation.find(params[:id])
    render json: @calculation
  end

  def assumptions
    @calculation = Calculation.find(params[:id])
    render json: @calculation.assumptions
  end

  def funnel_steps
    @calculation = Calculation.find(params[:id])
    render json: @calculation.funnel_steps
  end

  def result
    @calculation = Calculation.find(params[:id])
    render json: @calculation.result
  end

  def runrate
    @calculation = Calculation.find(params[:id])
    result = @calculation.result
    render json: result.runrate
  end

  def conversion_rates
    @calculation = Calculation.find(params[:id])
    result = @calculation.result
    render json: result.conversion_rates
  end

  def conversion_values
    @calculation = Calculation.find(params[:id])
    result = @calculation.result
    render json: result.conversion_values
  end

  def leaking_volume
    @calculation = Calculation.find(params[:id])
    result = @calculation.result
    render json: result.leaking_volume
  end

  private

  def user_params
    params.permit(:email)
  end

  def calculation_params
    # assumptions and funnel_steps need to be converted to hashes
    params.require(:calculation).permit(:name, :time_dimension, :assumptions => {}, :funnel_steps => {}).to_h
  end

end
