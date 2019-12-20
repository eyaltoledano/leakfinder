class CalculationsController < ApplicationController

  def index
    @calculations = Calculation.all
    render json: @calculations
  end

  def create
    @user = User.find_or_create_by(user_params)
    @calculation = @user.calculations.create(name: calculation_params[:name])
    @calculation.time_dimension = calculation_params[:time_dimension]

    calculation_params[:assumptions].each do |assumption_name, assumption_value|
      @calculation.assumptions.create(name: assumption_name, value: assumption_value)
    end

    calculation_params[:funnel_steps].each do |step_name, step_value|
      @calculation.funnel_steps.create(name: step_name, value: step_value)
    end

    result = Result.new
    @calculation.result = result

    @calculation.save
    render json: @calculation
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
    params.require(:calculation).permit(:name, :time_dimension, :assumptions => {}, :funnel_steps => {}).to_h
  end

end
