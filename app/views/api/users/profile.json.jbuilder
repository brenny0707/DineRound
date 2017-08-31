json.profile do
  json.extract!(@user, :id, :fname, :lname, :email_address)
  json.reservationIds @user.reservations.joins(:table).order("date asc, time asc").pluck(:id)
  # json.reviewIds @user.reservations.joins(:review).pluck(:id)
  json.reviewIds Review.all.joins(:reservation).where("reservations.user_id = #{@user.id}").pluck(:id)
  json.favoritesIds Favorite.all.where("favorites.user_id = #{@user.id}").pluck(:id)
end

json.reservations @user.reservations do |reservation|
  json.reservationId reservation.id
  json.date reservation.date
  json.time reservation.table.time
  json.seats reservation.table.seats
  json.restaurantName reservation.restaurant.name
  json.restaurantId reservation.restaurant.id
  if reservation.review.nil?
    json.reviewId nil
  else
    json.reviewId reservation.review.id
  end
end

json.reviews do
  @user.reviews.each do |review|
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

json.restaurants do
  @user.favorite_restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.id restaurant.id
      json.name restaurant.name
      json.address restaurant.address
    end
  end
end

json.favorites do
  @user.favorites.each do |favorite|
    json.set! favorite.id do
      json.id favorite.id
      json.userId favorite.user_id
      json.restaurantId favorite.restaurant_id
    end
  end
end
