class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = current_user
    if @user
      render :profile
    else
      render json: ["You are not logged in"], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :email_address, :password)
  end

end
