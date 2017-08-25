class AddOperationInfoToRestaurants < ActiveRecord::Migration[5.0]
  def change
    add_column :restaurants, :about, :text, null: false
    add_column :restaurants, :hours, :string, null: false
    add_column :restaurants, :phone_number, :string, null: false
    add_column :restaurants, :website_url, :string, null: false
  end
end
