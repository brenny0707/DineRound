json.set! review.id do
  json.id review.id
  json.body review.body
  json.user_id review.user_id
  json.reservation_id review.reservation_id
  json.overall_rating review.overall_rating
  json.food_rating review.food_rating
  json.service_rating review.service_rating
  json.ambiance_rating review.ambiance_rating
  json.value_rating review.value_rating
  json.created_at review.created_at
  json.updated_at review.updated_at
  json.userFName review.user.fname
end
# (review, :id, :body, :user_id, :overall_rating, :food_rating, :service_rating, :ambiance_rating, :value_rating, :reservation_id, :created_at, :updated_at)
