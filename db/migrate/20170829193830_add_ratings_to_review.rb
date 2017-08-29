class AddRatingsToReview < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :overall_rating, :integer, null: false
    add_column :reviews, :food_rating, :integer, null: false
    add_column :reviews, :service_rating, :integer, null: false
    add_column :reviews, :ambiance_rating, :integer, null: false
    add_column :reviews, :noise_level, :string, null: false
  end
end
