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
