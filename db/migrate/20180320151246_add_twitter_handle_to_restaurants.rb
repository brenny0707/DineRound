class AddTwitterHandleToRestaurants < ActiveRecord::Migration[5.0]
  def change
    add_column :restaurants, :twitter_handle, :string
  end
end
