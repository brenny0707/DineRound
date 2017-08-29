class ChangeValueReviewName < ActiveRecord::Migration[5.0]
  def change
    rename_column :reviews, :value, :value_rating
  end
end
