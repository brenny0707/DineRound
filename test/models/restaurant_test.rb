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
#  image_url    :string
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
