# == Schema Information
#
# Table name: tables
#
#  id            :integer          not null, primary key
#  restaurant_id :integer          not null
#  seats         :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  time          :time             not null
#

require 'test_helper'

class TableTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
