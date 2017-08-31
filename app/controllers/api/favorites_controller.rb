class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors.full_messages
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    if @favorite.destroy
      render json: {}
    else
      render json: ["Could not delete the favorite"]
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :restaurant_id)
  end
end
