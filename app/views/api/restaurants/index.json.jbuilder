json.array! @restaurants do |restaurant|
  json.partial! 'api/restaurants/restaurant', restaurant: restaurant
end
