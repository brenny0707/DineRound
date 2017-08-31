json.extract!(restaurant, :id, :name, :address, :about, :hours, :phone_number, :website_url)
json.reviewIds Review.find_by_sql(["
  SELECT reviews.id
    FROM reviews
    JOIN reservations
      ON reservations.id = reviews.reservation_id
    JOIN tables
      ON tables.id = reservations.table_id
    JOIN restaurants
      ON restaurants.id = tables.restaurant_id
    WHERE restaurants.id = ?
  ", restaurant.id]).pluck(:id)

json.tables restaurant.tables do |table|
  json.id table.id
  json.time table.time
  json.seats table.seats
  json.restaurant_id table.restaurant_id
end

json.reviews do
  restaurant.reviews.each do |review|
    json.set! review.id do
      json.id review.id
      json.userId review.user_id
      json.reservationId review.reservation_id
      json.body review.body
      json.createdAt review.created_at
      json.updatedAt review.updated_at
      json.overallRating review.overall_rating
      json.foodRating review.food_rating
      json.serviceRating review.service_rating
      json.ambianceRating review.ambiance_rating
      json.valueRating review.value_rating
    end
  end
end
