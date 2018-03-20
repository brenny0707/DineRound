class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.find_by_restaurant_name(params[:name])
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
