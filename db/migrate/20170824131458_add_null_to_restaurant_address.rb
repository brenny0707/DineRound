class AddNullToRestaurantAddress < ActiveRecord::Migration[5.0]
  def change
    change_column_null :restaurants, :address, false
  end
end
