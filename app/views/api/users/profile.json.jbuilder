json.profile do
  json.extract!(@user, :id, :fname, :lname, :email_address)
  json.reservationIds @user.reservations.joins(:table).order("date asc, time asc").pluck(:id)
end

json.reservations @user.reservations do |reservation|
  json.reservationId reservation.id
  json.date reservation.date
  json.time reservation.table.time
  json.seats reservation.table.seats
  json.restaurantName reservation.restaurant.name
  json.restaurantId reservation.restaurant.id

end
