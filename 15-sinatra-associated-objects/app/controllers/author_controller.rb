class AuthorController < ApplicationController

    set :views, "app/views/authors"


    get "/authors" do 
        @authors = Author.all
        erb :index
    end


    get "/authors/new" do 
        # render blank form


        erb :new

    end

    post "/authors" do 
        # process the create author form
        name = params[:name]
        birthday = params[:birthday]

        author = Author.create(name: name, birthday: birthday)
        params[:book].each do |book_hash|
            binding.pry
            title = book_hash["title"]
            snippet = book_hash["snippet"]
            Book.create(title: title, snippet: snippet, author:author)
        end
        redirect "/authors/#{author.id}"
    end

    get "/authors/:id" do 
        @author = Author.find(params[:id])
        # @birthday = @author.birthday ||= "I don't know"
        erb :show
    end
end