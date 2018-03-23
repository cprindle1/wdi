# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.create(title: "product1", price: 50)
Product.create(title: "product2", price: 25)

Review.create(rating: 5, content: "Pretty good and alright", product_id: 1)
Review.create(rating: 1, content: "Piece of garbage", product_id: 1)
Review.create(rating: 3, content: "Just ok", product_id: 2)
