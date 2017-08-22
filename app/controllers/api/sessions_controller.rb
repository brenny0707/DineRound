class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
    params[:user][:email_address],
    params[:user][:password])
    if @user
      login(@user)
      render "api/users/show" #need to explicitly call users show page since in sessions controller, not users controller
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["404, Not Found"], status: 404
    end

  end
end

# $.ajax({
#   method: "POST",
# 	url: "api/users",
# 	data: {user: {email_address: "yo@yo.com", fname: "yo", lname: "yo", password: "yoyoyo"}}
# })


# $.ajax({
#   method: "POST",
# 	url: "api/session",
# 	data: {user: {email_address: "yo@yo.com", password: "yoyoyo"}}
# })
