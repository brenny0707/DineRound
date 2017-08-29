class ChangeRestaurantIdInReviewsToReservationId < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :restaurant_id
    add_column :reviews, :reservation_id, :integer, null: false
  end
end
