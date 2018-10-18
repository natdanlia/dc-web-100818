require_relative "../lib/author.rb"
require_relative "../lib/book.rb"

maya = Author.find_or_create_by(name: "Maya Angelou", birth_year: 1950)
stephen = Author.find_or_create_by(name: "Stephen King", birth_year: 1950)

it = Book.find_or_create_by(title: "It", author: stephen, year_published: 1976)

