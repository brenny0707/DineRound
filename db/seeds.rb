# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email_address: "hallo@moto.com", fname: "Hallo", lname: "Moto", password: "hallomoto")

user2 = User.create(email_address: "sup@sup.com", fname: "sup", lname: "sup", password: "supsup")

user3 = User.create(email_address: "username@password.com", fname: "User", lname: "Name", password: "Password")

demo_user = User.create(email_address: "demo@account.com", fname: "Demo", lname: "Account", password: "password")

restaurant1 = Restaurant.create(name: "Test Restaurant",
address: "29 East 29th Street, New York, NY 10016")

table1 = Table.create(restaurant_id: restaurant1.id, seats: 2, time: '17:30:00')
table2 = Table.create(restaurant_id: restaurant1.id, seats: 2, time: '17:30:00')
table3 = Table.create(restaurant_id: restaurant1.id, seats: 4, time: '17:30:00')
table4 = Table.create(restaurant_id: restaurant1.id, seats: 6, time: '17:30:00')
table5 = Table.create(restaurant_id: restaurant1.id, seats: 2, time: '19:00:00')
table6 = Table.create(restaurant_id: restaurant1.id, seats: 2, time: '19:00:00')
table7 = Table.create(restaurant_id: restaurant1.id, seats: 2, time: '19:00:00')
table8 = Table.create(restaurant_id: restaurant1.id, seats: 2, time: '19:00:00')
table9 = Table.create(restaurant_id: restaurant1.id, seats: 4, time: '19:00:00')
table10 = Table.create(restaurant_id: restaurant1.id, seats: 4, time: '19:00:00')
table11 = Table.create(restaurant_id: restaurant1.id, seats: 6, time: '19:00:00')
table12 = Table.create(restaurant_id: restaurant1.id, seats: 2, time: '21:00:00')
table13 = Table.create(restaurant_id: restaurant1.id, seats: 2, time: '21:00:00')
table14 = Table.create(restaurant_id: restaurant1.id, seats: 4, time: '21:00:00')
table15 = Table.create(restaurant_id: restaurant1.id, seats: 4, time: '21:00:00')
