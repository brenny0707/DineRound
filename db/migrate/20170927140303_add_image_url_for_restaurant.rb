class AddImageUrlForRestaurant < ActiveRecord::Migration[5.0]
  def change
    add_column :restaurants, :image_url, :string
  end
end
