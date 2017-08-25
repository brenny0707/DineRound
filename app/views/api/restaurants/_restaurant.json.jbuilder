json.extract!(restaurant, :id, :name, :address, :about, :hours, :phone_number, :website_url)
json.tables restaurant.tables do |table|
  json.id table.id
  json.time table.time
  json.seats table.seats
  json.restaurant_id table.restaurant_id
end
