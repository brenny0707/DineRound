class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new(restaurant_id: params[:restaurant_id], user_id: current_user.id)
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors.full_messages
    end
  end

  def destroy
    @favorite = Favorite.find_by(restaurant_id: params[:restaurant_id], user_id: current_user.id)
    if @favorite.destroy
      render json: @favorite
    else
      render json: ["Could not delete the favorite"]
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :restaurant_id)
  end
end
