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
end
