@favorites.each do |favorite|
  json.set! favorite.id do
    json.id favorite.id
    json.userId favorite.user_id
    json.restaurantId favorite.restaurant_id
  end
end
