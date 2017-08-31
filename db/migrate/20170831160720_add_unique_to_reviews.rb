class AddUniqueToReviews < ActiveRecord::Migration[5.0]
  def change
    remove_index :reviews, :user_id
    add_index :reviews, [:user_id, :reservation_id], unique: true
  end
end
