# == Schema Information
#
# Table name: tables
#
#  id            :integer          not null, primary key
#  restaurant_id :integer          not null
#  seats         :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  time          :time             not null
#

class Table < ApplicationRecord
  validates :restaurant, :time, :seats, presence: true

  belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

  has_many :reservations,
    foreign_key: :table_id,
    class_name: :Reservation

    def self.find_open_restaurant_tables(restaurant_name, seats, date, time)
      hour = time.split(":")[0].to_i
      min = time.split(":")[1].to_i
      sec = time.split(":")[2].to_i
      format_time = Time.utc(2000,1,1,hour,min,sec)
      time_boundaries= [Time.utc(2000,1,1,0,0,0), Time.utc(2000,1,1,23,59,59)]
      start_time = format_time - (3600 * 2.5)
      end_time = format_time + (3600 * 2.5)
      start_time = time_boundaries[0] if start_time < time_boundaries[0]
      end_time = time_boundaries[1] if end_time > time_boundaries[1]

      Table.find_by_sql([
        "SELECT tables.*, restaurants.name, reservations.date
        FROM tables
        JOIN restaurants
        ON tables.restaurant_id = restaurants.id
        LEFT OUTER JOIN reservations
        ON reservations.table_id = tables.id AND reservations.date = ?
        WHERE restaurants.name = ? AND (seats = ? OR seats = ? + 1) AND reservations.id IS NULL and time BETWEEN ? and ?",
        date, restaurant_name, seats, seats, start_time, end_time])
    end

end
