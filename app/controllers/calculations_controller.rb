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

end
