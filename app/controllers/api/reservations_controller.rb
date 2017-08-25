class Api::ReservationsController < ApplicationController

  before_action :require_logged_in, only: [:create, :destroy, :update]
  def index
    @reservations = Reservation.find_restaurant_reservations(
    params[:restaurant_name],
    params[:seats],
    params[:date],
    params[:time])

    if @reservations.length = 0
      render json: ["We're sorry, there are currently no tables available at the time you have chosen."]
    else
      render :index
    end
  end

  def show

  end

  def create

  end

  def destroy

  end

  def update

  end

end
