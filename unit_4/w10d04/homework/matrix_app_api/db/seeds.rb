# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Character.create([

	{ name: "Neo", description: "Neo (born as Thomas A. Anderson, also known as The One, an anagram for Neo) is a fictional character and the main protagonist in The Matrix franchise" },
	{ name: "Trinity", description: "Trinity is a fictional character in The Matrix franchise. She is portrayed by Carrie-Anne Moss in the films. In the gameplay segments of Path of Neo, she is voiced by Jennifer Hale." },
	{ name: "Morpheus", description: "Morpheus is a fictional character in The Matrix franchise. He is portrayed by Laurence Fishburne in the films, and in the video game The Matrix: Path of Neo where he was the only actor to reprise his character's voice" },
	{ name: "Agent Smith", description: "Agent Smith is a fictional character and the primary antagonist in the The Matrix franchise." },

])

Vehicle.create(name: "Nebuchadnezzar", style: "Spaceship")
