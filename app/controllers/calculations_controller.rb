class CalculationsController < ApplicationController

  def index
    @calculations = Calculation.all
    render json: @calculations
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

end
