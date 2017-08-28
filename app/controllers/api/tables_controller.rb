class Api::TablesController < ApplicationController
  def index
    @tables = Table.find_open_restaurant_tables(
    params[:restaurant_name],
    params[:seats].to_i,
    params[:date],
    params[:time])
    if @tables.length == 0
      render json: {}
    else
      render :index
    end
  end
end
