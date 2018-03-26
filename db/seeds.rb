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
  website_url: "http://www.martamanhattan.com/",
  twitter_handle: "martamanhattan",
  image_url: "http://images.nymag.com/listings/restaurant/marta_main.jpg")

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
  website_url: "http://www.gramercytavern.com/",
  twitter_handle: "GramercyTavern",
  image_url: "http://images.nymag.com/listings/restaurant/maingramercytavern.jpg")

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
  website_url: "https://www.juniperhoh.com/",
  twitter_handle: "alexsze",
  image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/l_Ofpl4LW4K1Qhh7aEaMrg/348s.jpg")

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
  website_url: "https://www.le-bernardin.com/",
  twitter_handle: "LeBernardinNY",
  image_url: "http://images.nymag.com/listings/restaurant/main-lebarnardin.jpg")

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
    website_url:"https://www.shakeshack.com/location/grand-central-terminal-nyc/",
    twitter_handle: "shakeshack",
    image_url: "http://images.nymag.com/listings/restaurant/shake-shack-bklyn-main.jpg")

  restaurant6 = Restaurant.create(
    name: "Marea",
    address: "240 Central Park S, New York, NY 10019",
    about: "Marea Ristorante, located in one of Manhattans most storied addresses, features Chef Michael White's ode to Italian seafood. From his trademark handmade pastas to his fresh crudo and whole fish, Chef White is committed to reinventing the notion of seafood in New York.",
    hours:
    "Sunday: 5:30 PM - 11:00 PM,
      Monday: 12:00 PM - 11:00 PM,
      Tuesday: 12:00 PM - 11:00 PM,
      Wednesday: 12:00 PM - 11:00 PM,
      Thursday: 12:00 PM - 11:00 PM,
      Friday: 12:00 PM - 11:00 PM,
      Saturday: 5:30 PM - 11:00 PM",
    phone_number: "(212) 582-5100",
    website_url: "http://www.marea-nyc.com/",
    twitter_handle: "MareaNYC",
    image_url: "http://images.nymag.com/listings/restaurant/main-marea-a.jpg")

  restaurant7 = Restaurant.create(
    name: "Smith & Wollensky - New York",
    address: "797 3rd Ave, New York, NY 10022",
    about: "The landmark Smith & Wollensky in New York City is located on the corner of Third Avenue and 49th Street, serving outstanding steakhouse fare that features USDA Prime steaks, dry aged and butchered on-premise. Opened in 1977, the original Smith & Wollensky has set the standard by which all other steakhouses are judged. The New York Times agrees, calling the restaurant “a steakhouse to end all arguments” and Gourmet said this is the quintessential New York steakhouse.",
    hours: "Sunday: 5:30 PM - 11:00 PM,
      Monday: 12:00 PM - 11:00 PM,
      Tuesday: 12:00 PM - 11:00 PM,
      Wednesday: 12:00 PM - 11:00 PM,
      Thursday: 12:00 PM - 11:00 PM,
      Friday: 12:00 PM - 11:00 PM,
      Saturday: 5:30 PM - 11:00 PM",
    phone_number: "(212) 753-1530",
    website_url: "http://www.smithandwollenskynyc.com/",
    twitter_handle: "smithwollensky",
    image_url: "http://images.nymag.com/listings/restaurant/mainsmithandwollensky5.jpg")

restaurant8 = Restaurant.create(
  name: "The NoMad",
  address: "1170 Broadway, New York, NY 10001",
  about: "The NoMad is the second restaurant from Chef Daniel Humm and Restaurateur Will Guidara. Inspired by the Chef's time spent throughout Switzerland, California, and New York City, the restaurant is rooted in the same traditions found at their critically-acclaimed, Michelin three-star rated Eleven Madison Park.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(347) 472-5660",
  website_url: "http://www.thenomadhotel.com/#/dining",
  twitter_handle: "TheNoMadHotel",
  image_url: "http://images.nymag.com/listings/restaurant/main-no-mad.jpg")

restaurant9 = Restaurant.create(
  name: "Minetta Tavern",
  address: "113 Macdougal St, New York, NY 10012",
  about: "Minetta Tavern was opened in Greenwich Village in 1937. The Tavern was named after the Minetta Brook, which ran southwest from 23rd Street to the Hudson River.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(212) 475-3850",
  website_url: "http://www.minettatavernny.com/",
  twitter_handle: "",
  image_url: "http://images.nymag.com/listings/restaurant/mainminettatavern.jpg")

restaurant10 = Restaurant.create(
  name: "Jean-Georges",
  address: "1 Central Park West, New York, NY 10023",
  about: "Jean-Georges opened in 1997 to critical acclaim. The jewel of Chef Jean-Georges Vongerichten’s empire, the restaurant offers the very best in fine dining. Consistently awarded four stars by the New York Times and three Michelin stars, Jean-Georges presents exquisitely crafted dishes blending French, American, and Asian influences. Chef Jean-Georges is a master at maintaining the essence of ingredients while using them inventively to produce the best flavor. Jean-Georges’ chic and intimate dining room was redesigned by Thomas Juul-Hansen, with striking lighting by L’Observatoire. Impeccable service, tableside preparations, and floor-to-ceiling windows with stunning views of Central Park and Columbus Circle all contribute to an unforgettable dining experience. Jean-Georges offers a three-course prix-fixe menu and two six-course tasting menus: a traditional tasting of the chef’s signature dishes, and a seasonal tasting featuring fresh market ingredients.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(212) 299-3900",
  website_url: "http://www.jean-georgesrestaurant.com/",
  twitter_handle: "Jean_GeorgesNYC",
  image_url: "http://images.nymag.com/listings/restaurant/main_jean-georges.jpg")

restaurant11 = Restaurant.create(
  name: "15 East Restaurant",
  address: "15 E 15th St, New York, NY 10003",
  about: "With the successful move of Tocqueville, owners Marco Moreira and Jo-Ann Makovitzky set about re-inventing the restaurant's original space with the help of acclaimed architect Richard Bloch. Reborn as 15 East, the restaurant serves contemporary Japanese cuisine and traditional sushi in an elegant, comfortable setting. Online reservations are for the dining room only. For reservations at the sushi bar please call the restaurant directly.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(212) 647-0015",
  website_url: "http://www.15eastrestaurant.com/",
  twitter_handle: "15East15",
  image_url: "http://images.nymag.com/listings/restaurant/main15east.jpg")

restaurant12 = Restaurant.create(
  name: "Gotham Bar and Grill",
  address: "12 E 12th St, New York, NY 10003",
  about: "Since first opening its doors in 1984, Gotham Bar and Grill has epitomized New York City dining at its finest, serving Executive Chef Alfred Portale's sublime and refreshingly accessible Contemporary American Cuisine in a dining room that is consistently packed with sophisticated diners from all over the country and the world.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(212) 620-4020",
  website_url: "http://www.gothambarandgrill.com/",
  twitter_handle: "GothamBar_Grill",
  image_url: "http://images.nymag.com/listings/restaurant/maingothambarandgrill.jpg")

restaurant13 = Restaurant.create(
  name: "Babbo Ristorante",
  address: "110 Waverly Pl, New York, NY 10011",
  about: "Mario Batali and Joe Bastianich's flagship restaurant, located on Waverly Place in Greenwich Village, opened to great acclaim in 1998 and is as bustling and popular as ever. It offers three-star dining that redefines and reinvents the principles of Italian cuisine for 21st century America. An epic, landmark wine list, an exciting, quintessentially New York dining room and expert, attentive and cordial service make a table at Babbo one of New York’s prized possessions.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(212) 777-0303",
  website_url: "http://www.babbonyc.com/",
  twitter_handle: "BabboRistorante",
  image_url: "http://images.nymag.com/listings/restaurant/mainbabbob.jpg")

restaurant14 = Restaurant.create(
  name: "Scarpetta",
  address: "355 W 14th St, New York, NY 10014",
  about: "Handmade pastas headline a sophisticated Italian menu at this upscale locale with a cool vibe.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(212) 691-0555",
  website_url: "http://www.ldvhospitality.com/brands/scarpetta/",
  twitter_handle: "LDVHospitality",
  image_url: "http://images.nymag.com/listings/restaurant/mainscarpetta.jpg")

restaurant15 = Restaurant.create(
  name: "Blue Hill",
  address: "75 Washington Pl, New York, NY 10011",
  about: "Located in a Land-Marked old 'Speakeasy' right off of Washington Square Park in the heart of Greenwich Village. Blue Hill restaurant opened at the end of April 2000. Blue Hill is dedicated to creating a new category of neighborhood restaurant that maintains the classic attributes of warmth and affordability, while delivering superior food and service.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(212) 539-1776",
  website_url: "http://www.bluehillfarm.com/",
  twitter_handle: "bluehillfarm",
  image_url: "http://images.nymag.com/listings/restaurant/mainbluehillnew.jpg")

restaurant16 = Restaurant.create(
  name: "Saint George",
  address: "155 Southside Avenue Hastings-on-Hudson, NY 10706",
  about: "Saint George is a casual French Bistro located at the historic 155 Southside in Hastings on Hudson. Traditional bistro fare is complimented by a wholly french wine cellar, full raw bar, house made charcuterie, Absinthe Fountain, and the preserved 19th century bar. ",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(914) 478-1671",
  website_url: "http://www.saintgeorgebistro.com/",
  twitter_handle: "Meritage29",
  image_url: "https://resizer.otstatic.com/v2/photos/large/23642145.jpg")

restaurant17 = Restaurant.create(
  name: "Per Se",
  address: "10 Columbus Circle New York, NY 10019",
  about: "Per Se offers two prix fixe tasting menus a Tasting of Vegetables or the Chef’s Tasting Menu, which changes daily.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(212) 823-9335",
  website_url: "https://www.thomaskeller.com/perseny",
  twitter_handle: "PerSeNY",
  image_url: "http://images.nymag.com/nymetro/food/reviews/restaurant/restreview040621_175.jpg")

restaurant18 = Restaurant.create(
name: "ABC Kitchen",
address: "35 East 18th Street New York, NY 10003",
about: "ABC Kitchen with Jean-Georges: passionately committed to offering the freshest organic and local ingredients possible.
ABC Kitchen presents a changing menu that is locally sourced and globally artistic in a fresh and articulate space.",
hours: "Sunday: 5:30 PM - 11:00 PM,
  Monday: 12:00 PM - 11:00 PM,
  Tuesday: 12:00 PM - 11:00 PM,
  Wednesday: 12:00 PM - 11:00 PM,
  Thursday: 12:00 PM - 11:00 PM,
  Friday: 12:00 PM - 11:00 PM,
  Saturday: 5:30 PM - 11:00 PM",
phone_number: "(212) 475-5829",
website_url: "http://www.abckitchennyc.com/",
twitter_handle: "ABCKitchen",
  image_url: "http://images.nymag.com/listings/restaurant/abc-cocina_main.jpg")

restaurant19 = Restaurant.create(
  name: "Morimoto New York",
  address: "88 10th Avenue New York, NY 10011",
  about: "Morimoto is the New York City interpretation of Executive Chef Masaharu Morimoto’s namesake Philadelphia restaurant that is co-owned with restaurateur Stephen Starr. Designed by world renowned architect Tadao Ando, the restaurant’s entrance features the world’s largest Japanese Noren curtain set against a massive façade of austere steel. Inside is an extraordinary open kitchen surrounded by a 24-seat sushi bar where diners can watch Morimoto and his chefs at work. On every level of the restaurant guests enjoy the elaborate menu where East meets West. Glass partitions create a private atmosphere between tables and a wall made of 17,000 spring water bottles add a touch of New York drama to this tranquil atmosphere. Guests have the option to dine on the top floor or congregate in the lower lounge for cocktails and snacks.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(212) 989-8883",
  website_url: "http://www.morimotonyc.com/",
  twitter_handle: "MorimotoNewYork",
  image_url: "http://images.nymag.com/listings/restaurant/mainmorimoto.jpg")

restaurant20 = Restaurant.create(
  name: "Momofuku Ko",
  address: "8 Extra Place New York, NY 10003",
  about: "Momofuku Ko serves a set multi-course menu for lunch and dinner along a kitchen counter and two tables in the main room. Please allow at least 2.5 hours for your menu. We also have a Private Room that can accommodate up to 14 guests.",
  hours: "Sunday: 5:30 PM - 11:00 PM,
    Monday: 12:00 PM - 11:00 PM,
    Tuesday: 12:00 PM - 11:00 PM,
    Wednesday: 12:00 PM - 11:00 PM,
    Thursday: 12:00 PM - 11:00 PM,
    Friday: 12:00 PM - 11:00 PM,
    Saturday: 5:30 PM - 11:00 PM",
  phone_number: "(212) 203-8095",
  website_url: "https://ko.momofuku.com/",
  twitter_handle: "momofuku",
  image_url: "http://images.nymag.com/listings/restaurant/momofuku-ko-main.jpg")

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

table64 = Table.create(restaurant_id: restaurant6.id, seats: 2, time: '17:30:00')
table65 = Table.create(restaurant_id: restaurant6.id, seats: 2, time: '18:00:00')
table66 = Table.create(restaurant_id: restaurant6.id, seats: 4, time: '18:00:00')
table67 = Table.create(restaurant_id: restaurant6.id, seats: 6, time: '18:30:00')
table68 = Table.create(restaurant_id: restaurant6.id, seats: 2, time: '19:00:00')
table69 = Table.create(restaurant_id: restaurant6.id, seats: 2, time: '19:00:00')
table70 = Table.create(restaurant_id: restaurant6.id, seats: 2, time: '19:30:00')
table71 = Table.create(restaurant_id: restaurant6.id, seats: 2, time: '20:00:00')
table72 = Table.create(restaurant_id: restaurant6.id, seats: 4, time: '19:00:00')
table73 = Table.create(restaurant_id: restaurant6.id, seats: 4, time: '20:00:00')
table74 = Table.create(restaurant_id: restaurant6.id, seats: 6, time: '20:00:00')
table75 = Table.create(restaurant_id: restaurant6.id, seats: 2, time: '21:00:00')
table76 = Table.create(restaurant_id: restaurant6.id, seats: 2, time: '21:30:00')
table77 = Table.create(restaurant_id: restaurant6.id, seats: 4, time: '21:00:00')
table78 = Table.create(restaurant_id: restaurant6.id, seats: 4, time: '22:00:00')


table79 = Table.create(restaurant_id: restaurant7.id, seats: 2, time: '17:30:00')
table80 = Table.create(restaurant_id: restaurant7.id, seats: 2, time: '18:00:00')
table81 = Table.create(restaurant_id: restaurant7.id, seats: 4, time: '18:00:00')
table82 = Table.create(restaurant_id: restaurant7.id, seats: 6, time: '18:30:00')
table83 = Table.create(restaurant_id: restaurant7.id, seats: 2, time: '19:00:00')
table84 = Table.create(restaurant_id: restaurant7.id, seats: 2, time: '19:00:00')
table85 = Table.create(restaurant_id: restaurant7.id, seats: 2, time: '19:30:00')
table86 = Table.create(restaurant_id: restaurant7.id, seats: 2, time: '20:00:00')
table87 = Table.create(restaurant_id: restaurant7.id, seats: 4, time: '19:00:00')
table88 = Table.create(restaurant_id: restaurant7.id, seats: 4, time: '20:00:00')
table89 = Table.create(restaurant_id: restaurant7.id, seats: 6, time: '20:00:00')
table90 = Table.create(restaurant_id: restaurant7.id, seats: 2, time: '21:00:00')
table91 = Table.create(restaurant_id: restaurant7.id, seats: 2, time: '21:30:00')
table92 = Table.create(restaurant_id: restaurant7.id, seats: 4, time: '21:00:00')
table93 = Table.create(restaurant_id: restaurant7.id, seats: 4, time: '22:00:00')


table94 = Table.create(restaurant_id: restaurant8.id, seats: 2, time: '17:30:00')
table95 = Table.create(restaurant_id: restaurant8.id, seats: 2, time: '18:00:00')
table96 = Table.create(restaurant_id: restaurant8.id, seats: 4, time: '18:00:00')
table97 = Table.create(restaurant_id: restaurant8.id, seats: 6, time: '18:30:00')
table98 = Table.create(restaurant_id: restaurant8.id, seats: 2, time: '19:00:00')
table99 = Table.create(restaurant_id: restaurant8.id, seats: 2, time: '19:00:00')
table100 = Table.create(restaurant_id: restaurant8.id, seats: 2, time: '19:30:00')
table101 = Table.create(restaurant_id: restaurant8.id, seats: 2, time: '20:00:00')
table102 = Table.create(restaurant_id: restaurant8.id, seats: 4, time: '19:00:00')
table103 = Table.create(restaurant_id: restaurant8.id, seats: 4, time: '20:00:00')
table104 = Table.create(restaurant_id: restaurant8.id, seats: 6, time: '20:00:00')
table105 = Table.create(restaurant_id: restaurant8.id, seats: 2, time: '21:00:00')
table106 = Table.create(restaurant_id: restaurant8.id, seats: 2, time: '21:30:00')
table107 = Table.create(restaurant_id: restaurant8.id, seats: 4, time: '21:00:00')
table108 = Table.create(restaurant_id: restaurant8.id, seats: 4, time: '22:00:00')


table109 = Table.create(restaurant_id: restaurant9.id, seats: 2, time: '17:30:00')
table110 = Table.create(restaurant_id: restaurant9.id, seats: 2, time: '18:00:00')
table111 = Table.create(restaurant_id: restaurant9.id, seats: 4, time: '18:00:00')
table112 = Table.create(restaurant_id: restaurant9.id, seats: 6, time: '18:30:00')
table113 = Table.create(restaurant_id: restaurant9.id, seats: 2, time: '19:00:00')
table114 = Table.create(restaurant_id: restaurant9.id, seats: 2, time: '19:00:00')
table115 = Table.create(restaurant_id: restaurant9.id, seats: 2, time: '19:30:00')
table116 = Table.create(restaurant_id: restaurant9.id, seats: 2, time: '20:00:00')
table117 = Table.create(restaurant_id: restaurant9.id, seats: 4, time: '19:00:00')
table118 = Table.create(restaurant_id: restaurant9.id, seats: 4, time: '20:00:00')
table119 = Table.create(restaurant_id: restaurant9.id, seats: 6, time: '20:00:00')
table120 = Table.create(restaurant_id: restaurant9.id, seats: 2, time: '21:00:00')
table121 = Table.create(restaurant_id: restaurant9.id, seats: 2, time: '21:30:00')
table122 = Table.create(restaurant_id: restaurant9.id, seats: 4, time: '21:00:00')
table123 = Table.create(restaurant_id: restaurant9.id, seats: 4, time: '22:00:00')


table124 = Table.create(restaurant_id: restaurant10.id, seats: 2, time: '17:30:00')
table125 = Table.create(restaurant_id: restaurant10.id, seats: 2, time: '18:00:00')
table126 = Table.create(restaurant_id: restaurant10.id, seats: 4, time: '18:00:00')
table127 = Table.create(restaurant_id: restaurant10.id, seats: 6, time: '18:30:00')
table128 = Table.create(restaurant_id: restaurant10.id, seats: 2, time: '19:00:00')
table129 = Table.create(restaurant_id: restaurant10.id, seats: 2, time: '19:00:00')
table130 = Table.create(restaurant_id: restaurant10.id, seats: 2, time: '19:30:00')
table131 = Table.create(restaurant_id: restaurant10.id, seats: 2, time: '20:00:00')
table132 = Table.create(restaurant_id: restaurant10.id, seats: 4, time: '19:00:00')
table133 = Table.create(restaurant_id: restaurant10.id, seats: 4, time: '20:00:00')
table134 = Table.create(restaurant_id: restaurant10.id, seats: 6, time: '20:00:00')
table135 = Table.create(restaurant_id: restaurant10.id, seats: 2, time: '21:00:00')
table136 = Table.create(restaurant_id: restaurant10.id, seats: 2, time: '21:30:00')
table137 = Table.create(restaurant_id: restaurant10.id, seats: 4, time: '21:00:00')
table138 = Table.create(restaurant_id: restaurant10.id, seats: 4, time: '22:00:00')


table139 = Table.create(restaurant_id: restaurant11.id, seats: 2, time: '17:30:00')
table140 = Table.create(restaurant_id: restaurant11.id, seats: 2, time: '18:00:00')
table141 = Table.create(restaurant_id: restaurant11.id, seats: 4, time: '18:00:00')
table142 = Table.create(restaurant_id: restaurant11.id, seats: 6, time: '18:30:00')
table143 = Table.create(restaurant_id: restaurant11.id, seats: 2, time: '19:00:00')
table144 = Table.create(restaurant_id: restaurant11.id, seats: 2, time: '19:00:00')
table145 = Table.create(restaurant_id: restaurant11.id, seats: 2, time: '19:30:00')
table146 = Table.create(restaurant_id: restaurant11.id, seats: 2, time: '20:00:00')
table147 = Table.create(restaurant_id: restaurant11.id, seats: 4, time: '19:00:00')
table148 = Table.create(restaurant_id: restaurant11.id, seats: 4, time: '20:00:00')
table149 = Table.create(restaurant_id: restaurant11.id, seats: 6, time: '20:00:00')
table150 = Table.create(restaurant_id: restaurant11.id, seats: 2, time: '21:00:00')
table151 = Table.create(restaurant_id: restaurant11.id, seats: 2, time: '21:30:00')
table152 = Table.create(restaurant_id: restaurant11.id, seats: 4, time: '21:00:00')
table153 = Table.create(restaurant_id: restaurant11.id, seats: 4, time: '22:00:00')


table154 = Table.create(restaurant_id: restaurant12.id, seats: 2, time: '17:30:00')
table155 = Table.create(restaurant_id: restaurant12.id, seats: 2, time: '18:00:00')
table156 = Table.create(restaurant_id: restaurant12.id, seats: 4, time: '18:00:00')
table157 = Table.create(restaurant_id: restaurant12.id, seats: 6, time: '18:30:00')
table158 = Table.create(restaurant_id: restaurant12.id, seats: 2, time: '19:00:00')
table159 = Table.create(restaurant_id: restaurant12.id, seats: 2, time: '19:00:00')
table160 = Table.create(restaurant_id: restaurant12.id, seats: 2, time: '19:30:00')
table161 = Table.create(restaurant_id: restaurant12.id, seats: 2, time: '20:00:00')
table162 = Table.create(restaurant_id: restaurant12.id, seats: 4, time: '19:00:00')
table163 = Table.create(restaurant_id: restaurant12.id, seats: 4, time: '20:00:00')
table164 = Table.create(restaurant_id: restaurant12.id, seats: 6, time: '20:00:00')
table165 = Table.create(restaurant_id: restaurant12.id, seats: 2, time: '21:00:00')
table166 = Table.create(restaurant_id: restaurant12.id, seats: 2, time: '21:30:00')
table167 = Table.create(restaurant_id: restaurant12.id, seats: 4, time: '21:00:00')
table168 = Table.create(restaurant_id: restaurant12.id, seats: 4, time: '22:00:00')


table169 = Table.create(restaurant_id: restaurant13.id, seats: 2, time: '17:30:00')
table170 = Table.create(restaurant_id: restaurant13.id, seats: 2, time: '18:00:00')
table171 = Table.create(restaurant_id: restaurant13.id, seats: 4, time: '18:00:00')
table172 = Table.create(restaurant_id: restaurant13.id, seats: 6, time: '18:30:00')
table173 = Table.create(restaurant_id: restaurant13.id, seats: 2, time: '19:00:00')
table174 = Table.create(restaurant_id: restaurant13.id, seats: 2, time: '19:00:00')
table175 = Table.create(restaurant_id: restaurant13.id, seats: 2, time: '19:30:00')
table176 = Table.create(restaurant_id: restaurant13.id, seats: 2, time: '20:00:00')
table177 = Table.create(restaurant_id: restaurant13.id, seats: 4, time: '19:00:00')
table178 = Table.create(restaurant_id: restaurant13.id, seats: 4, time: '20:00:00')
table179 = Table.create(restaurant_id: restaurant13.id, seats: 6, time: '20:00:00')
table180 = Table.create(restaurant_id: restaurant13.id, seats: 2, time: '21:00:00')
table181 = Table.create(restaurant_id: restaurant13.id, seats: 2, time: '21:30:00')
table182 = Table.create(restaurant_id: restaurant13.id, seats: 4, time: '21:00:00')
table183 = Table.create(restaurant_id: restaurant13.id, seats: 4, time: '22:00:00')


table184 = Table.create(restaurant_id: restaurant14.id, seats: 2, time: '17:30:00')
table185 = Table.create(restaurant_id: restaurant14.id, seats: 2, time: '18:00:00')
table186 = Table.create(restaurant_id: restaurant14.id, seats: 4, time: '18:00:00')
table187 = Table.create(restaurant_id: restaurant14.id, seats: 6, time: '18:30:00')
table188 = Table.create(restaurant_id: restaurant14.id, seats: 2, time: '19:00:00')
table189 = Table.create(restaurant_id: restaurant14.id, seats: 2, time: '19:00:00')
table190 = Table.create(restaurant_id: restaurant14.id, seats: 2, time: '19:30:00')
table191 = Table.create(restaurant_id: restaurant14.id, seats: 2, time: '20:00:00')
table192 = Table.create(restaurant_id: restaurant14.id, seats: 4, time: '19:00:00')
table193 = Table.create(restaurant_id: restaurant14.id, seats: 4, time: '20:00:00')
table194 = Table.create(restaurant_id: restaurant14.id, seats: 6, time: '20:00:00')
table195 = Table.create(restaurant_id: restaurant14.id, seats: 2, time: '21:00:00')
table196 = Table.create(restaurant_id: restaurant14.id, seats: 2, time: '21:30:00')
table197 = Table.create(restaurant_id: restaurant14.id, seats: 4, time: '21:00:00')
table198 = Table.create(restaurant_id: restaurant14.id, seats: 4, time: '22:00:00')


table199 = Table.create(restaurant_id: restaurant15.id, seats: 2, time: '17:30:00')
table200 = Table.create(restaurant_id: restaurant15.id, seats: 2, time: '18:00:00')
table201 = Table.create(restaurant_id: restaurant15.id, seats: 4, time: '18:00:00')
table202 = Table.create(restaurant_id: restaurant15.id, seats: 6, time: '18:30:00')
table203 = Table.create(restaurant_id: restaurant15.id, seats: 2, time: '19:00:00')
table204 = Table.create(restaurant_id: restaurant15.id, seats: 2, time: '19:00:00')
table205 = Table.create(restaurant_id: restaurant15.id, seats: 2, time: '19:30:00')
table206 = Table.create(restaurant_id: restaurant15.id, seats: 2, time: '20:00:00')
table207 = Table.create(restaurant_id: restaurant15.id, seats: 4, time: '19:00:00')
table208 = Table.create(restaurant_id: restaurant15.id, seats: 4, time: '20:00:00')
table209 = Table.create(restaurant_id: restaurant15.id, seats: 6, time: '20:00:00')
table210 = Table.create(restaurant_id: restaurant15.id, seats: 2, time: '21:00:00')
table211 = Table.create(restaurant_id: restaurant15.id, seats: 2, time: '21:30:00')
table212 = Table.create(restaurant_id: restaurant15.id, seats: 4, time: '21:00:00')
table213 = Table.create(restaurant_id: restaurant15.id, seats: 4, time: '22:00:00')


table214 = Table.create(restaurant_id: restaurant16.id, seats: 2, time: '17:30:00')
table215 = Table.create(restaurant_id: restaurant16.id, seats: 2, time: '18:00:00')
table216 = Table.create(restaurant_id: restaurant16.id, seats: 4, time: '18:00:00')
table217 = Table.create(restaurant_id: restaurant16.id, seats: 6, time: '18:30:00')
table218 = Table.create(restaurant_id: restaurant16.id, seats: 2, time: '19:00:00')
table219 = Table.create(restaurant_id: restaurant16.id, seats: 2, time: '19:00:00')
table220 = Table.create(restaurant_id: restaurant16.id, seats: 2, time: '19:30:00')
table221 = Table.create(restaurant_id: restaurant16.id, seats: 2, time: '20:00:00')
table222 = Table.create(restaurant_id: restaurant16.id, seats: 4, time: '19:00:00')
table223 = Table.create(restaurant_id: restaurant16.id, seats: 4, time: '20:00:00')
table224 = Table.create(restaurant_id: restaurant16.id, seats: 6, time: '20:00:00')
table225 = Table.create(restaurant_id: restaurant16.id, seats: 2, time: '21:00:00')
table226 = Table.create(restaurant_id: restaurant16.id, seats: 2, time: '21:30:00')
table227 = Table.create(restaurant_id: restaurant16.id, seats: 4, time: '21:00:00')
table228 = Table.create(restaurant_id: restaurant16.id, seats: 4, time: '22:00:00')


table229 = Table.create(restaurant_id: restaurant17.id, seats: 2, time: '17:30:00')
table230 = Table.create(restaurant_id: restaurant17.id, seats: 2, time: '18:00:00')
table231 = Table.create(restaurant_id: restaurant17.id, seats: 4, time: '18:00:00')
table232 = Table.create(restaurant_id: restaurant17.id, seats: 6, time: '18:30:00')
table233 = Table.create(restaurant_id: restaurant17.id, seats: 2, time: '19:00:00')
table234 = Table.create(restaurant_id: restaurant17.id, seats: 2, time: '19:00:00')
table235 = Table.create(restaurant_id: restaurant17.id, seats: 2, time: '19:30:00')
table236 = Table.create(restaurant_id: restaurant17.id, seats: 2, time: '20:00:00')
table237 = Table.create(restaurant_id: restaurant17.id, seats: 4, time: '19:00:00')
table238 = Table.create(restaurant_id: restaurant17.id, seats: 4, time: '20:00:00')
table239 = Table.create(restaurant_id: restaurant17.id, seats: 6, time: '20:00:00')
table240 = Table.create(restaurant_id: restaurant17.id, seats: 2, time: '21:00:00')
table241 = Table.create(restaurant_id: restaurant17.id, seats: 2, time: '21:30:00')
table242 = Table.create(restaurant_id: restaurant17.id, seats: 4, time: '21:00:00')
table243 = Table.create(restaurant_id: restaurant17.id, seats: 4, time: '22:00:00')


table244 = Table.create(restaurant_id: restaurant18.id, seats: 2, time: '17:30:00')
table245 = Table.create(restaurant_id: restaurant18.id, seats: 2, time: '18:00:00')
table246 = Table.create(restaurant_id: restaurant18.id, seats: 4, time: '18:00:00')
table247 = Table.create(restaurant_id: restaurant18.id, seats: 6, time: '18:30:00')
table248 = Table.create(restaurant_id: restaurant18.id, seats: 2, time: '19:00:00')
table249 = Table.create(restaurant_id: restaurant18.id, seats: 2, time: '19:00:00')
table250 = Table.create(restaurant_id: restaurant18.id, seats: 2, time: '19:30:00')
table251 = Table.create(restaurant_id: restaurant18.id, seats: 2, time: '20:00:00')
table252 = Table.create(restaurant_id: restaurant18.id, seats: 4, time: '19:00:00')
table253 = Table.create(restaurant_id: restaurant18.id, seats: 4, time: '20:00:00')
table254 = Table.create(restaurant_id: restaurant18.id, seats: 6, time: '20:00:00')
table255 = Table.create(restaurant_id: restaurant18.id, seats: 2, time: '21:00:00')
table256 = Table.create(restaurant_id: restaurant18.id, seats: 2, time: '21:30:00')
table257 = Table.create(restaurant_id: restaurant18.id, seats: 4, time: '21:00:00')
table258 = Table.create(restaurant_id: restaurant18.id, seats: 4, time: '22:00:00')


table259 = Table.create(restaurant_id: restaurant19.id, seats: 2, time: '17:30:00')
table260 = Table.create(restaurant_id: restaurant19.id, seats: 2, time: '18:00:00')
table261 = Table.create(restaurant_id: restaurant19.id, seats: 4, time: '18:00:00')
table262 = Table.create(restaurant_id: restaurant19.id, seats: 6, time: '18:30:00')
table263 = Table.create(restaurant_id: restaurant19.id, seats: 2, time: '19:00:00')
table264 = Table.create(restaurant_id: restaurant19.id, seats: 2, time: '19:00:00')
table265 = Table.create(restaurant_id: restaurant19.id, seats: 2, time: '19:30:00')
table266 = Table.create(restaurant_id: restaurant19.id, seats: 2, time: '20:00:00')
table267 = Table.create(restaurant_id: restaurant19.id, seats: 4, time: '19:00:00')
table268 = Table.create(restaurant_id: restaurant19.id, seats: 4, time: '20:00:00')
table269 = Table.create(restaurant_id: restaurant19.id, seats: 6, time: '20:00:00')
table270 = Table.create(restaurant_id: restaurant19.id, seats: 2, time: '21:00:00')
table271 = Table.create(restaurant_id: restaurant19.id, seats: 2, time: '21:30:00')
table272 = Table.create(restaurant_id: restaurant19.id, seats: 4, time: '21:00:00')
table273 = Table.create(restaurant_id: restaurant19.id, seats: 4, time: '22:00:00')


table274 = Table.create(restaurant_id: restaurant20.id, seats: 2, time: '17:30:00')
table275 = Table.create(restaurant_id: restaurant20.id, seats: 2, time: '18:00:00')
table276 = Table.create(restaurant_id: restaurant20.id, seats: 4, time: '18:00:00')
table277 = Table.create(restaurant_id: restaurant20.id, seats: 6, time: '18:30:00')
table278 = Table.create(restaurant_id: restaurant20.id, seats: 2, time: '19:00:00')
table279 = Table.create(restaurant_id: restaurant20.id, seats: 2, time: '19:00:00')
table280 = Table.create(restaurant_id: restaurant20.id, seats: 2, time: '19:30:00')
table281 = Table.create(restaurant_id: restaurant20.id, seats: 2, time: '20:00:00')
table282 = Table.create(restaurant_id: restaurant20.id, seats: 4, time: '19:00:00')
table283 = Table.create(restaurant_id: restaurant20.id, seats: 4, time: '20:00:00')
table284 = Table.create(restaurant_id: restaurant20.id, seats: 6, time: '20:00:00')
table285 = Table.create(restaurant_id: restaurant20.id, seats: 2, time: '21:00:00')
table286 = Table.create(restaurant_id: restaurant20.id, seats: 2, time: '21:30:00')
table287 = Table.create(restaurant_id: restaurant20.id, seats: 4, time: '21:00:00')
table288 = Table.create(restaurant_id: restaurant20.id, seats: 4, time: '22:00:00')

Reservation.destroy_all
reservation1 = Reservation.create(date: "2017-8-26", user_id: demo_user.id, table_id: table3.id)
reservation2 = Reservation.create(date: "2017-8-27", user_id: demo_user.id, table_id: table5.id)
reservation3 = Reservation.create(date: "2017-8-26", user_id: demo_user.id, table_id: table57.id)
reservation4 = Reservation.create(date: "2017-8-30", user_id: demo_user.id, table_id: table53.id)
reservation5 = Reservation.create(date: "2017-8-27", user_id: user1.id, table_id: table3.id)
reservation6 = Reservation.create(date: "2017-8-28", user_id: user1.id, table_id: table3.id)
reservation7 = Reservation.create(date: "2017-8-29", user_id: user1.id, table_id: table3.id)
reservation8 = Reservation.create(date: "2017-8-30", user_id: user1.id, table_id: table3.id)
reservation9 = Reservation.create(date: "2017-9-01", user_id: demo_user.id, table_id: table64.id)
reservation10 = Reservation.create(date: "2017-9-04", user_id: demo_user.id, table_id: table70.id)
reservation11 = Reservation.create(date: "2017-9-05", user_id: demo_user.id, table_id: table75.id)
reservation12 = Reservation.create(date: "2017-9-06", user_id: demo_user.id, table_id: table78.id)
reservation13 = Reservation.create(date: "2017-9-07", user_id: demo_user.id, table_id: table85.id)
reservation14 = Reservation.create(date: "2017-9-08", user_id: demo_user.id, table_id: table100.id)
reservation15 = Reservation.create(date: "2017-9-09", user_id: demo_user.id, table_id: table110.id)
reservation16 = Reservation.create(date: "2017-9-10", user_id: demo_user.id, table_id: table120.id)
reservation17 = Reservation.create(date: "2017-9-20", user_id: demo_user.id, table_id: table130.id)
reservation18 = Reservation.create(date: "2017-9-25", user_id: demo_user.id, table_id: table150.id)
reservation19 = Reservation.create(date: "2017-9-28", user_id: demo_user.id, table_id: table200.id)
reservation20 = Reservation.create(date: "2017-9-30", user_id: demo_user.id, table_id: table260.id)



reservation_2_1 = Reservation.create(date: "2017-8-10", user_id: user2.id, table_id: table1.id)
reservation_2_2 = Reservation.create(date: "2017-8-20", user_id: user2.id, table_id: table130.id)
reservation_2_3 = Reservation.create(date: "2017-8-25", user_id: user2.id, table_id: table150.id)
reservation_2_4 = Reservation.create(date: "2017-8-28", user_id: user2.id, table_id: table200.id)
reservation_2_5 = Reservation.create(date: "2017-8-30", user_id: user2.id, table_id: table260.id)

Review.destroy_all
review1 = Review.create(body: "It was okay, there were some lapses in service and I had a hard time swallowing the high cost of each dish.", user_id: demo_user.id, reservation_id: reservation1.id, overall_rating: 3, food_rating: 3, service_rating: 3, ambiance_rating: 3, value_rating: 3)

review2 = Review.create(body: "It was great! The food was fantastic, with an excellent selection of wine. The sommelier came and offered a very interesting bottle of Alto Adige cabernet sauvignon, which had an excellent structure and surprising angularity compared to typical cabs. That coupled with a great braised short rib made this a fantastic night.", user_id: demo_user.id, reservation_id: reservation2.id, overall_rating: 5, food_rating: 5, service_rating: 5, ambiance_rating: 5, value_rating: 4)

review3 = Review.create(body: "Shake Shack is good, but more expensive than In N Out :(", user_id: demo_user.id, reservation_id: reservation3.id, overall_rating: 4, food_rating: 4, service_rating: 4, ambiance_rating: 3, value_rating: 3)

review4 = Review.create(body: "I'm an established self-proclaimed foodie who brings terror to all restaurants and give them awful reviews on sites like this to compensate for my lack of fulfilling in life.", user_id: user1.id, reservation_id: reservation5.id, overall_rating: 1, food_rating: 1, service_rating: 1, ambiance_rating: 1, value_rating: 1)

review5 = Review.create(body: "It was okay, there were some lapses in service and I had a hard time swallowing the high cost of each dish.", user_id: user2.id, reservation_id: reservation_2_1.id, overall_rating: 3, food_rating: 3, service_rating: 3, ambiance_rating: 3, value_rating: 3)

review6 = Review.create(body: "It was okay, there were some lapses in service and I had a hard time swallowing the high cost of each dish.", user_id: user2.id, reservation_id: reservation_2_2.id, overall_rating: 3, food_rating: 3, service_rating: 3, ambiance_rating: 3, value_rating: 3)

review7 = Review.create(body: "It was okay, there were some lapses in service and I had a hard time swallowing the high cost of each dish.", user_id: user2.id, reservation_id: reservation_2_3.id, overall_rating: 3, food_rating: 3, service_rating: 3, ambiance_rating: 3, value_rating: 3)

review8 = Review.create(body: "It was okay, there were some lapses in service and I had a hard time swallowing the high cost of each dish.", user_id: user2.id, reservation_id: reservation_2_4.id, overall_rating: 3, food_rating: 3, service_rating: 3, ambiance_rating: 3, value_rating: 3)

review9 = Review.create(body: "It was okay, there were some lapses in service and I had a hard time swallowing the high cost of each dish.", user_id: user2.id, reservation_id: reservation_2_5.id, overall_rating: 3, food_rating: 3, service_rating: 3, ambiance_rating: 3, value_rating: 3)
