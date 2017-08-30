# == Schema Information
#
# Table name: reviews
#
#  id              :integer          not null, primary key
#  body            :text             not null
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  overall_rating  :integer          not null
#  food_rating     :integer          not null
#  service_rating  :integer          not null
#  ambiance_rating :integer          not null
#  reservation_id  :integer          not null
#  value_rating    :integer          not null
#

class Review < ApplicationRecord
  validates :body, :user, :reservation, :overall_rating, :food_rating, :service_rating, :ambiance_rating, :value_rating, presence: true
  validates :overall_rating, :food_rating, :service_rating, :ambiance_rating, :value_rating, :inclusion => 1..5

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :reservation,
    foreign_key: :reservation_id,
    class_name: :Reservation

end
