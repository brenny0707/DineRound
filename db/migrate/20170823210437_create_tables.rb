class CreateTables < ActiveRecord::Migration[5.0]
  def change
    create_table :tables do |t|
      t.integer :restaurant_id, null: false
      t.string :time, null: false
      t.integer :seats, null: false
      t.timestamps
    end
  end
end
