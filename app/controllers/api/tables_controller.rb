class Api::TablesController < ApplicationController
  def index
    @tables = Table.find_open_restaurant_tables(
    params[:table][:restaurant_name],
    params[:table][:seats],
    params[:table][:date],
    params[:table][:time])

    if @tables.length == 0
      render json: ["We're sorry, there are currently no tables available at the time you have chosen."]
    else
      render :index
    end
  end
end
