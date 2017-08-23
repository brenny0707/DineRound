# == Schema Information
#
# Table name: tables
#
#  id            :integer          not null, primary key
#  restaurant_id :integer          not null
#  time          :string           not null
#  seats         :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Table < ApplicationRecord
  validates :restaurant_id, :time, :seats

  belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: :Restaurant
end
