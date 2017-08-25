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

end
