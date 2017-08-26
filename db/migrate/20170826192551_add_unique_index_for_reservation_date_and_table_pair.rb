class AddUniqueIndexForReservationDateAndTablePair < ActiveRecord::Migration[5.0]
  def change
    add_index :reservations, [:date, :table_id], unique: true
  end
end
