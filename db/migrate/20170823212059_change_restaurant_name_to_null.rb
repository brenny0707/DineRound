class ChangeRestaurantNameToNull < ActiveRecord::Migration[5.0]
  def change
    change_column_null :restaurants, :name, false
  end
end
