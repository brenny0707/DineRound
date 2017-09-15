# == Schema Information
#
# Table name: reviews
#
#  id              :integer          not null, primary key
#  body            :text
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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
