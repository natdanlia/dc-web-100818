require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="

# search_terms = "steven+universe"
# url = GOOGLE_BOOKS_API_BASE_URL + search_terms

# response = RestClient.get(url)
# json = JSON.parse(response)


def welcome_user
    puts "Welcome to the book searcher!"
    puts "Enter your search terms:"
end

def get_user_input
    search_terms = gets.chomp
    search_terms.gsub!(" ", "+")
end

def fetch_book_info(search_terms)
    url = GOOGLE_BOOKS_API_BASE_URL + search_terms
    response = RestClient.get(url)
    json = JSON.parse(response)
end

def parse_book_info(book_info)
    title = get_title(book_info)
    authors = get_authors(book_info)
    return {"title": title, "authors": authors}
end

def get_title(book_hash)
    book_hash["volumeInfo"]["title"]
end

def get_authors(book_hash)
    # returns authors in format of "AUTHORNAME & AUTHORNAME & AUTHORNAME"
    author_array = book_hash["volumeInfo"]["authors"] # ["Joe Smith", "Mary Jones"]
    if author_array.nil?
        author_string = "n/a"
    else
        author_string = author_array.join(" & ")
    end
end

def display_info(book_info)
    puts "Title: #{book_info[:title]}"
    puts "Author(s): #{book_info[:authors]}"
    puts "****************\n\n"
end

def run
    welcome_user
    search_terms = get_user_input
    book_info = fetch_book_info(search_terms)
    book_info["items"].each do |book_hash|
       parsed_book_info = parse_book_info(book_hash)
       display_info(parsed_book_info)
    end
end

run

