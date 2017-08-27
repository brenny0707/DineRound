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
  hours: "Sunday: 12:00 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 12:00 PM - 11:00 PM",
  phone_number: "(212) 651-3800",
  website_url: "http://www.martamanhattan.com/"
 )



restaurant2 = Restaurant.create(
  name: "Gramercy Tavern",
  address: "42 E. 20th St, New York, NY 10003",
  about: "The restaurant features an acclaimed wine list and thoughtfully selected beer and cocktail offerings. One of America’s most beloved restaurants, Gramercy Tavern has welcomed guests for over 23 years to enjoy seasonal American cuisine, warm hospitality and unparalleled service. The restaurant is ranked at the top of Zagat Survey’s Most Popular list and has garnered eight James Beard Awards including Outstanding Restaurant and Best Chef NYC.
  Chef Michael Anthony’s seasonal menu consists of elegant dishes with a rustic influence that showcase the restaurant’s relationships with local farms and purveyors.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(212) 477-0777",
  website_url: "http://www.gramercytavern.com/")

restaurant3 = Restaurant.create(
  name: "Juniper",
  address: "19 Main St, Hastings-On-Hudson, NY 10706",
  about: "New Asian-American Bistro serving banging dranks and a killer brunch set on Main Street USA in Hastings-on-Hudson NY.",
  hours: "Sunday: 4:00 PM - 8:00PM,
    Monday: 5:00 PM - 11:00 PM,
    Tuesday: 5:00 PM - 11:00 PM,
    Wednesday: 5:00 PM - 11:00 PM,
    Thursday: 5:00 PM - 11:00 PM,
    Friday: 5:00 PM - 11:00 PM,
    Saturday: 5:00 PM - 11:00 PM",
  phone_number: "(914) 478-2542",
  website_url: "https://www.juniperhoh.com/")

restaurant4 = Restaurant.create(
  name: "Le Bernardin",
  address: "155 W 51st St, New York, NY 10019",
  about: "Elite French restaurant offers chef Eric Ripert's refined seafood, expert service & luxurious decor.",
  hours: "Sunday: 5:15 PM - 10:30PM,
    Monday: 5:15 PM - 10:30 PM,
    Tuesday: 5:15 PM - 10:30 PM,
    Wednesday: 5:15 PM - 10:30 PM,
    Thursday: 5:15 PM - 10:30 PM,
    Friday: 5:15 PM - 10:30 PM,
    Saturday: 5:15 PM - 10:30 PM",
  phone_number: "(212) 554-1515",
  website_url: "https://www.le-bernardin.com/")

  restaurant5 = Restaurant.create(
    name: "Shake Shack - Grand Central Terminal",
    address: "49 E 42nd St, New York, NY 10017",
    about: "Hip, counter-serve chain for gourmet takes on fast-food classics like burgers & frozen custard.",
    hours: "Sunday: 7:00 AM - 10:30PM,
      Monday: 7:00 AM - 10:30 PM,
      Tuesday: 7:00 AM - 10:30 PM,
      Wednesday: 7:00 AM - 10:30 PM,
      Thursday: 7:00 AM - 10:30 PM,
      Friday: 7:00 AM - 10:30 PM,
      Saturday: 7:00 AM - 10:30 PM",
    phone_number: "(646) 517-5805",
    website_url: "https://www.shakeshack.com/location/grand-central-terminal-nyc/")

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
table28 = Table.create(restaurant_id: restaurant3.id, seats: 2, time: '17:00:00')
table29 = Table.create(restaurant_id: restaurant3.id, seats: 2, time: '17:00:00')
table30 = Table.create(restaurant_id: restaurant3.id, seats: 2, time: '17:00:00')
table31 = Table.create(restaurant_id: restaurant3.id, seats: 4, time: '17:00:00')
table32 = Table.create(restaurant_id: restaurant3.id, seats: 4, time: '17:00:00')
table33 = Table.create(restaurant_id: restaurant3.id, seats: 2, time: '19:00:00')
table34 = Table.create(restaurant_id: restaurant3.id, seats: 2, time: '19:00:00')
table35 = Table.create(restaurant_id: restaurant3.id, seats: 2, time: '19:00:00')
table36 = Table.create(restaurant_id: restaurant3.id, seats: 2, time: '19:00:00')
table37 = Table.create(restaurant_id: restaurant3.id, seats: 2, time: '19:00:00')
table38 = Table.create(restaurant_id: restaurant3.id, seats: 4, time: '19:00:00')
table39 = Table.create(restaurant_id: restaurant3.id, seats: 4, time: '19:00:00')
table40 = Table.create(restaurant_id: restaurant3.id, seats: 6, time: '19:00:00')
table41 = Table.create(restaurant_id: restaurant3.id, seats: 2, time: '21:00:00')
table42 = Table.create(restaurant_id: restaurant3.id, seats: 2, time: '21:00:00')
table43 = Table.create(restaurant_id: restaurant3.id, seats: 4, time: '21:00:00')
table44 = Table.create(restaurant_id: restaurant3.id, seats: 6, time: '21:00:00')
table45 = Table.create(restaurant_id: restaurant4.id, seats: 2, time: '17:15:00')
table46 = Table.create(restaurant_id: restaurant4.id, seats: 4, time: '17:15:00')
table47 = Table.create(restaurant_id: restaurant4.id, seats: 6, time: '17:15:00')
table48 = Table.create(restaurant_id: restaurant4.id, seats: 2, time: '19:30:00')
table49 = Table.create(restaurant_id: restaurant4.id, seats: 2, time: '19:30:00')
table50 = Table.create(restaurant_id: restaurant4.id, seats: 2, time: '19:30:00')
table51 = Table.create(restaurant_id: restaurant4.id, seats: 4, time: '19:30:00')
table52 = Table.create(restaurant_id: restaurant4.id, seats: 6, time: '19:30:00')
table53 = Table.create(restaurant_id: restaurant4.id, seats: 2, time: '22:30:00')
table54 = Table.create(restaurant_id: restaurant4.id, seats: 2, time: '22:30:00')
table55 = Table.create(restaurant_id: restaurant4.id, seats: 4, time: '22:30:00')
table56 = Table.create(restaurant_id: restaurant4.id, seats: 6, time: '22:30:00')

table57 = Table.create(restaurant_id: restaurant5.id, seats: 2, time: '07:00:00')
table58 = Table.create(restaurant_id: restaurant5.id, seats: 6, time: '07:00:00')
table59 = Table.create(restaurant_id: restaurant5.id, seats: 2, time: '12:30:00')
table60 = Table.create(restaurant_id: restaurant5.id, seats: 4, time: '12:30:00')
table61 = Table.create(restaurant_id: restaurant5.id, seats: 6, time: '12:30:00')
table62 = Table.create(restaurant_id: restaurant5.id, seats: 2, time: '22:30:00')
table63 = Table.create(restaurant_id: restaurant5.id, seats: 4, time: '22:30:00')

Reservation.destroy_all
reservation1 = Reservation.create(date: "2017-8-26", user_id: demo_user.id, table_id: table3.id)
reservation2 = Reservation.create(date: "2017-8-27", user_id: demo_user.id, table_id: table5.id)
reservation3 = Reservation.create(date: "2017-8-26", user_id: demo_user.id, table_id: table57.id)
reservation4 = Reservation.create(date: "2017-8-30", user_id: demo_user.id, table_id: table53.id)
reservation5 = Reservation.create(date: "2017-8-27", user_id: user1.id, table_id: table3.id)
reservation6 = Reservation.create(date: "2017-8-28", user_id: user1.id, table_id: table3.id)
reservation7 = Reservation.create(date: "2017-8-29", user_id: user1.id, table_id: table3.id)
reservation8 = Reservation.create(date: "2017-8-30", user_id: user1.id, table_id: table3.id)
