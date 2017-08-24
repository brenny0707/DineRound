class AddNullToTableTime < ActiveRecord::Migration[5.0]
  def change
    change_column_null :tables, :time, false
  end
end
