# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  Trader.create({ name: Faker::Name.name, money: 1000 })
end

Commodity.create([
  { name: "Oil", price: 53.28 },
  { name: "Gold", price: 1216.70 },
  { name: "Natural Gas", price: 3.175 },
  { name: "Copper", price: 2.654 },
  { name: "Gasoline", price: 1.6 },
  { name: "Silver", price: 17.95 },
  { name: "Wheat", price: 428.2 },
  { name: "Coffee", price: 153.20 },
  { name: "Lumber", price: 325.50 },
  { name: "Milk", price: 16.77 },
])
