# == Schema Information
#
# Table name: favorites
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Favorite < ApplicationRecord
  validates :user, :restaurant, presence: true
  validates :user, uniqueness: { scope: :restaurant_id }

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :restaurant,
  foreign_key: :restaurant_id,
  class_name: :Restaurant
end
