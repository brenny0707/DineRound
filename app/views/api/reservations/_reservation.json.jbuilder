json.extract!(reservation, :id, :date, :user_id, :table_id)
json.time reservation.table.time
json.seats reservation.table.seats
json.restaurantName reservation.restaurant.name
json.restaurantId reservation.restaurant.id
json.reviewId reservation.review.id
