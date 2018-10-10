class Cat

    attr_accessor :name, :number_of_legs
    # attr_reader :species
    attr_writer :floofiness
    # attr_reader :@@species

    @@all = []
    SPECIES = "Feline"

    def initialize(color, number_of_legs=4)
      @color = color
      @species = "feline"
      @number_of_legs = number_of_legs
      @@all << self
    end

    def self.all
        @@all
    end

    def self.species
        SPECIES
    end

    # attr_writer
    # def name=(name)
    #     # setter
    #     @name = name
    # end

    # # attr_reader
    # def name
    #     # getter 
    #     @name
    # end

    def say_hi
        puts "Hi I am a cat and my name is #{self.name}"
    end

    def say_species
      puts "Hi! I'm a #{SPECIES}"
    end

    def color
        @color
    end

    def say_color
        puts "Hi I am #{@color}"
    end

    def floofiness
        if @floofiness > 5
            puts "You are a very floofy kitty"
        else
            puts "You are not so floofy but still better than a dog"
        end
    end
end

ella = Cat.new("black")
puts ella.say_species
puts Cat.species
# ella.name = "Ella"
# ella.say_hi
# puts ella.number_of_legs
# lexi = Cat.new("orange", 3)
# puts lexi.number_of_legs
# puts Cat.s
# puts "*******"
# lexi = Cat.new("orange")
# puts Cat.all
# ella.name=("Ella")
# # ella.species
# puts ella.name
# puts ella.species
# ella.floofiness = 10
# ella.floofiness
