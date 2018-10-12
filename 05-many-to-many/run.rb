require_relative "./tweet.rb"
require_relative "./user.rb"
require 'pry'

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")

tweet1 = Tweet.new("I heart coffee", coffee_dad)
tweet2 = Tweet.new("I heart tea", tea_uncle)
tweet3 = Tweet.new("Coffee is good", coffee_dad)
tweet4 = Tweet.new("I need coffee", coffee_dad)
tweet5 = Tweet.new("Life is a meaningless void", coffee_dad)

puts "Gets correct username?"
puts coffee_dad.username == "Coffee Dad"

puts "Gets tweet message?"
puts tweet1.message == "I heart coffee"

puts "Tweet knows its user?"
puts tweet1.user == coffee_dad

puts "Tweet can show its username"
puts tweet1.username == coffee_dad.username
puts tweet2.user.username == "Tea Uncle"

puts "Tweet class can get all instances of Tweets"
puts Tweet.all.include?(tweet1)
puts Tweet.all.include?(tweet2)

puts "User can get all their Tweets"
puts coffee_dad.tweets.include?(tweet1)
puts coffee_dad.tweets.include?(tweet3)
puts !coffee_dad.tweets.include?(tweet2)

puts "User can post tweet?"
tweet6 = coffee_dad.post_tweet("I am so sleepy")
puts coffee_dad.tweets.include?(tweet6)

binding.pry
0



