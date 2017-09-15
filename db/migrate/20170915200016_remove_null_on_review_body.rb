class RemoveNullOnReviewBody < ActiveRecord::Migration[5.0]
  def change
    change_column_null :reviews, :body, true
  end
end
