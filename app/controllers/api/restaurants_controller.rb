class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render :index
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    if @restaurant
      render :show
    else
      render json: ["Restaurant does not exist"]
    end
  end


end
