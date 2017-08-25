# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user1 = User.create(email_address: "hallo@moto.com", fname: "Hallo", lname: "Moto", password: "hallomoto")

user2 = User.create(email_address: "sup@sup.com", fname: "sup", lname: "sup", password: "supsup")

user3 = User.create(email_address: "username@password.com", fname: "User", lname: "Name", password: "Password")

demo_user = User.create(email_address: "demo@account.com", fname: "Demo", lname: "Account", password: "password")

Restaurant.destroy_all
restaurant1 = Restaurant.create(
  name: "Marta",
  address: "29 East 29th Street, New York, NY 10016",
  about: "Marta is a lively Italian restaurant helmed by Executive Chef Joe Tarasco. Inspired by the rustic tradition of Roman pizzerie, local haunts that churn out thin, crackly-crusted pizzas, Marta features an energetic open kitchen with two wood-burning ovens and an open-fire grill taking center stage.",
  hours: "Sunday: 12:00 PM- 11:00 PM,
    Monday: 12:00 PM- 11:00 PM,
    Tuesday: 12:00 PM- 11:00 PM,
    Wednesday: 12:00 PM- 11:00 PM,
    Thursday: 12:00 PM- 11:00 PM,
    Friday: 12:00 PM- 11:00 PM,
    Saturday: 12:00 PM- 11:00 PM",
  phone_number: "(212) 651-3800",
  website_url: "http://www.martamanhattan.com/"
 )



restaurant2 = Restaurant.create(
  name: "Gramercy Tavern",
  address: "42 E. 20th St, New York, NY 10003",
  about: "The restaurant features an acclaimed wine list and thoughtfully selected beer and cocktail offerings. One of America’s most beloved restaurants, Gramercy Tavern has welcomed guests for over 23 years to enjoy seasonal American cuisine, warm hospitality and unparalleled service. The restaurant is ranked at the top of Zagat Survey’s Most Popular list and has garnered eight James Beard Awards including Outstanding Restaurant and Best Chef NYC.
  Chef Michael Anthony’s seasonal menu consists of elegant dishes with a rustic influence that showcase the restaurant’s relationships with local farms and purveyors.",
  hours: "Sunday: 5:30 PM- 11:00 PM,
    Monday: 12:00 PM- 11:00 PM,
    Tuesday: 12:00 PM- 11:00 PM,
    Wednesday: 12:00 PM- 11:00 PM,
    Thursday: 12:00 PM- 11:00 PM,
    Friday: 12:00 PM- 11:00 PM,
    Saturday: 5:30 PM- 11:00 PM",
  phone_number: "(212) 477-0777",
  website_url: "http://www.gramercytavern.com/")

Table.destroy_all
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
table16 = Table.create(restaurant_id: restaurant2.id, seats: 2, time: '17:30:00')
table17 = Table.create(restaurant_id: restaurant2.id, seats: 4, time: '17:30:00')
table18 = Table.create(restaurant_id: restaurant2.id, seats: 6, time: '17:30:00')
table19 = Table.create(restaurant_id: restaurant2.id, seats: 2, time: '19:00:00')
table20 = Table.create(restaurant_id: restaurant2.id, seats: 2, time: '19:00:00')
table21 = Table.create(restaurant_id: restaurant2.id, seats: 2, time: '19:00:00')
table22 = Table.create(restaurant_id: restaurant2.id, seats: 4, time: '19:00:00')
table23 = Table.create(restaurant_id: restaurant2.id, seats: 4, time: '19:00:00')
table24 = Table.create(restaurant_id: restaurant2.id, seats: 6, time: '19:00:00')
table25 = Table.create(restaurant_id: restaurant2.id, seats: 2, time: '21:00:00')
table26 = Table.create(restaurant_id: restaurant2.id, seats: 2, time: '21:00:00')
table27 = Table.create(restaurant_id: restaurant2.id, seats: 4, time: '21:00:00')
