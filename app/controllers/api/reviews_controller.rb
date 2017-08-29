class Api::ReviewsController < ApplicationController
  def index
    @restaurant = Restaurant.find(params[:restaurant_id])
    @reviews = @restaurant.reviews
    if @reviews
    else
      render json: ["Restaurant does not exist"]
    end
  end

  def show
    @reservation = Reservation.find(params[:reservation_id])
    if @reservation
      @review = @reservation.review
      if @review
        render :show
      else
        render json: ["No Review yet written"]
      end
    else

    end
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def edit

  end

  private

  def review_params
    params.require(:review).permit(:title, :body, :user_id, :reservation_id, :overall_rating, :food_rating, :service_rating, :ambiance_rating, :value_rating)
  end
end
