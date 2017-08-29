class ChangeRatingsInReviews < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :noise_level
    add_column :reviews, :value, :integer, null: false
  end
end
