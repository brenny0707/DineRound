class ChangeTableTimeToDateTime < ActiveRecord::Migration[5.0]
  def change
    remove_column :tables, :time
    add_column :tables, :time, :time
  end
end
