class ApplicationController < Sinatra::Base

    set :views, "app/views"

    get "/" do 
        erb :home
    end

    get "/books" do 
        # load a list of all my books
        @books = Book.all 
        erb :index
    end

    get "/books/:id" do
        book_id = params[:id]
        @book = Book.find(book_id)
        erb :show
    end
end
