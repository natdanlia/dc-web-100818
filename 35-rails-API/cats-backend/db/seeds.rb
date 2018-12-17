# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create(name: 'Jitters', breed: 'Mix', age: 4, quote: 'meow', image: 'https://media.mnn.com/assets/images/2018/07/cat_eating_fancy_ice_cream.jpg.838x0_q80.jpg')
Cat.create(name: 'Juju', breed: 'Tabby', age: 1, quote: 'i hate the world', image: 'https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg')
Cat.create(name: 'Waffles', breed: 'DSH', age: 7, quote: 'hiss', image: 'https://i.kinja-img.com/gawker-media/image/upload/s--Q4WTuzbO--/c_fill,f_auto,fl_progressive,g_north,h_264,q_80,w_470/lltozqbgqulk1rjoctzu.jpg')
Cat.create(name: 'Robin', breed: 'Siamese', age: 3, quote: "You miss 100% of the shot you don't take", image: 'https://media.licdn.com/dms/image/C5103AQEwJ__cO1769g/profile-displayphoto-shrink_200_200/0?e=1544659200&v=beta&t=B3-MxwF5wbL6D24NQUz2wdttmKF9Qf2q7-hFyiC5JKY')

Hobby.create(name: 'eat', description: 'yummmmmm')
Hobby.create(name: 'rock climb', description: 'ouch')
Hobby.create(name: 'ping pong', description: 'music')

CatHobby.create(cat_id: 1, hobby_id: 1)
CatHobby.create(cat_id: 1, hobby_id: 3)
CatHobby.create(cat_id: 2, hobby_id: 2)
CatHobby.create(cat_id: 2, hobby_id: 3)
CatHobby.create(cat_id: 4, hobby_id: 1)
CatHobby.create(cat_id: 4, hobby_id: 2)
CatHobby.create(cat_id: 4, hobby_id: 3)
CatHobby.create(cat_id: 3, hobby_id: 3)
