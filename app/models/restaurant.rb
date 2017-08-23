# == Schema Information
#
# Table name: restaurants
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Restaurant < ApplicationRecord
  validates :name, presence: true
  
  has_many :tables,
    foreign_key: :restaurant_id,
    class_name: :Table

end
