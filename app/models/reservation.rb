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

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :table,
    foreign_key: :table_id,
    class_name: :Table

  def self.find_restaurant_reservations(restaurant_id, seats, date, time)
    hour = time.split(":")[0].to_i
    min = time.split(":")[1].to_i
    sec = time.split(":")[2].to_i
    format_time = Time.utc(2000,1,1,hour,min,sec)
    start_time = format_time - (3600 * 2.5)
    end_time = format_time + (3600 * 2.5)
    #Fix line 32's date interpolation to avoid SQL injection!
    Table.joins("LEFT OUTER JOIN reservations ON reservations.table_id=tables.id AND reservations.date = '#{date}' ").where(["restaurant_id = ? and (seats = ? OR seats = ? + 1 ) and reservations.id IS NULL and time BETWEEN '#{start_time}' and '#{end_time}'", restaurant_id, seats, seats])
  end
end
