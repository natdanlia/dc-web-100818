class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

    get "/" do 
        erb :home
    end

    get "/books" do 
        # load a list of all my books
        @books = Book.all 
        erb :index
    end

    get "/books/new" do
        erb :new
    end

    post "/books" do
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
        book = Book.create(author: author, title: title, snippet:snippet)
        redirect "/books/#{book.id}"
    end

    get "/books/:id" do
        book_id = params[:id]
        @book = Book.find(book_id)
        erb :show
    end

    get "/books/:id/edit" do 
        @book = Book.find(params[:id])
        erb :edit
    end

    put "/books/:id" do
        book = Book.find(params[:id])
        book.update(title: params[:title],
                    author: params[:author],
                    snippet: params[:snippet])
        redirect "/books/#{book.id}"
    end

    delete "/books/:id" do
        book = Book.find(params[:id])
        book.destroy
        redirect "/books"
    end

end
