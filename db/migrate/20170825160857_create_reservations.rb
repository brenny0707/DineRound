class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.date :date, null: false
      t.integer :user_id, null: false
      t.integer :table_id, null: false
      
      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :table_id
  end
end
