class Api::ReservationsController < ApplicationController

  before_action :require_logged_in, only: [:create, :destroy, :update]
  # def index
  #   @reservations = Reservation.where(user_id: current_user.id)
  #   if @reservations
  #     render :index
  #   else
  #     render json: ["You have no reservations"]
  #   end
  # end

  def show
    @reservation = Reservation.find(params[:id])
    if @reservation
      if current_user.nil? || @reservation.user_id == current_user.id
        render :show
      else
        render json: ["You are only allowed to see your own reservations"]
      end
    else
      render json: ["Reservation does not exist"], status: 404
    end
  end

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    if @reservation.destroy && @reservation.user_id == current_user.id
      @reservation.destroy
      render json: @reservation
    else
      render json: ["There was a problem deleting your reservation"], status: 422
    end
  end

  def update
    #TBD...
  end

  private

  def reservation_params
    params.require(:reservation).permit(:date, :user_id, :table_id)
  end

end
