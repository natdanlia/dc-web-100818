class Author

    attr_accessor :name
    attr_reader :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def self.create(name)
        author = Author.new(name)
        author.save
    end

    def self.all
        sql = <<-SQL
            SELECT * FROM authors
        SQL
        results = DB.execute(sql)
        results.map {|row| make_object_from_row(row)}
    end

    def save
        # write to database
        sql = "INSERT INTO authors (name) values (?)"
        DB.execute(sql, self.name)
    end

    def self.find(id)
        # Author.find(1) = <Author #239854723i9y5 name="Stephen King"
        sql = "SELECT * FROM authors WHERE id = (?)"
        results = DB.execute(sql, id)
        make_object_from_row(results[0])
    end

    def self.make_object_from_row(row)
        author_id = row[0]
        author_name = row[1]
        Author.new(author_name, author_id)
    end
end


# module SQLite3

#     class Database

#         def initialize(db_location)
#             @db_location = db_location
#             # do some other stuff
#         end

#         def execute(sql, variables)
