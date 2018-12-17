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
        author
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
        if self.id.nil?
            sql = "INSERT INTO authors (name) values (?)"
            DB.execute(sql, self.name)
            sql = "SELECT last_insert_rowid()"
            @id = DB.execute(sql)[0][0]
        else
            sql = "UPDATE authors SET (name) = ? WHERE id = ?"
            DB.execute(sql, self.name, self.id)
        end
    end

    def self.find(id)
        # Author.find(1) = <Author #239854723i9y5 name="Stephen King"
        sql = "SELECT * FROM authors WHERE id = (?)"
        results = DB.execute(sql, id)
        make_object_from_row(results[0])
    end

    def self.find_by_name(name)
        sql = <<-SQL 
            SELECT * FROM authors WHERE name = ? 
        SQL
        results = DB.execute(sql, name)
        make_object_from_row(results[0])

    end

    def self.make_object_from_row(row)
        author_id = row[0]
        author_name = row[1]
        Author.new(author_name, author_id)
    end

    def delete
        sql = <<-SQL
            DELETE FROM authors where id = ?
        SQL
        DB.execute(sql, self.id)
    end
end


# module SQLite3

#     class Database

#         def initialize(db_location)
#             @db_location = db_location
#             # do some other stuff
#         end

#         def execute(sql, variables)
