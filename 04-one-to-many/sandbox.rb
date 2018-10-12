class School

    attr_reader :name
    attr_accessor :instructors

    def initialize(name)
        @name = name
        @instructors = []
    end

    def add_instructor(instructor_name)
        new_instructor = Instructor.new(instructor_name)
        @instructors << new_instructor
    end

end

class Instructor

    attr_accessor :name
    
    def initialize(name)
        @name = name
    end

end

flatiron = School.new("Flatiron")

flatiron.add_instructor("Paul")
flatiron.add_instructor("Hilary")
flatiron.add_instructor("Lane")

puts flatiron.instructors
