json.array! @tables do |table|
  json.tableId table.id
  json.time table.time
  json.seats table.seats
  json.restaurantName table.restaurant.name
end
