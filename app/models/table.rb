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
    foreign_key: :reservation_id,
    class_name: :Reservation
end
