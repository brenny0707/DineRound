# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  date       :date             not null
#  user_id    :integer          not null
#  table_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reservation < ApplicationRecord
  validates :date, :user, :table, presence: true
  validates :date, uniqueness: { scope: :table_id }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :table,
    foreign_key: :table_id,
    class_name: :Table

  delegate :restaurant, to: :table


  #MOVED TO TABLE MODEL, YOU'RE LOOKING FOR OPEN TABLES, NOT EMPTY RESERVATIONS!!!
  # def self.find_restaurant_reservations(restaurant_name, seats, date, time)
  #   hour = time.split(":")[0].to_i
  #   min = time.split(":")[1].to_i
  #   sec = time.split(":")[2].to_i
  #   format_time = Time.utc(2000,1,1,hour,min,sec)
  #   start_time = format_time - (3600 * 2.5)
  #   end_time = format_time + (3600 * 2.5)
  #
  #   Table.find_by_sql([
  #     "SELECT tables.*, restaurants.name, reservations.date
  #     FROM tables
  #     JOIN restaurants
  #     ON tables.restaurant_id = restaurants.id
  #     LEFT OUTER JOIN reservations
  #     ON reservations.table_id = tables.id AND reservations.date = ?
  #     WHERE restaurants.name = ? AND (seats = ? OR seats = ? + 1) AND reservations.id IS NULL and time BETWEEN ? and ?",
  #     date, restaurant_name, seats, seats, start_time, end_time])

      #Previous attemps!
    # Table
    #   .joins("JOIN restaurants ON tables.restaurant_id=restaurants.id")
    #   .joins(["LEFT OUTER JOIN reservations ON reservations.table_id=tables.id AND reservations.date = ? ",date])
    #   .where(["restaurants.name = ? and (seats = ? OR seats = ? + 1 ) and reservations.id IS NULL and time BETWEEN ? and ? ", restaurant_name, seats, seats, start_time, end_time])
    # ActiveRecord::Base.connection.execute(<<-SQL, date, restaurant_name, seats, seats, start_time, end_time)
    #   SELECT tables.*, restaurants.name
    #   FROM tables
    #   JOIN restaurants
    #     ON tables.restaurant_id = restaurants.id
    #   LEFT OUTER JOIN reservations
    #     ON reservations.table_id = tables.id AND reservations.date = ?
    #   WHERE restaurants.name = ? AND (seats = ? OR seats = ? + 1) AND reservations.id IS NULL and time BETWEEN ? and ?
    # SQL
    # ActiveRecord::Base.connection.execute(<<-SQL, restaurant_name)
    # SELECT tables.*, restaurants.name
    # FROM tables
    # JOIN restaurants
    #   ON tables.restaurant_id = restaurants.id
    #   AND restaurants.name= ?
    # SQL
    # Table
    #   .joins("JOIN restaurants ON tables.restaurant_id=restaurants.id")
    #   .joins("LEFT OUTER JOIN reservations ON reservations.table_id=tables.id")
    #   .where(["restaurants.name = ? and (seats = ? OR seats = ? + 1 ) and reservations.id IS NULL and time BETWEEN ? and ? ", restaurant_name, seats, seats, start_time, end_time])
  end
end
