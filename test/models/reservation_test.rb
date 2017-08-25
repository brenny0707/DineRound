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

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
