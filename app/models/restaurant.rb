# == Schema Information
#
# Table name: restaurants
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  address      :string           not null
#  about        :text             not null
#  hours        :string           not null
#  phone_number :string           not null
#  website_url  :string           not null
#

class Restaurant < ApplicationRecord
  validates :name, :address, :about, :hours, :phone_number, :website_url, presence: true

  has_many :tables,
    foreign_key: :restaurant_id,
    class_name: :Table

  has_many :reservations,
    through: :tables,
    source: :reservations

  def self.find_by_restaurant_name(restaurant_name)
    Restaurant.find_by_sql([
      "SELECT restaurants.*
      FROM restaurants
      WHERE restaurants.name LIKE Concat('%',?,'%')
      ", restaurant_name])
  end

end
