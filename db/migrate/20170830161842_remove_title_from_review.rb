class RemoveTitleFromReview < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :title
  end
end
