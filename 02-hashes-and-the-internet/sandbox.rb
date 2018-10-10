require 'rest-client'
require 'json'
require 'pry'

url = "https://www.reddit.com/r/todayilearned/.json"

my_response = RestClient.get(url)

binding.pry
0
