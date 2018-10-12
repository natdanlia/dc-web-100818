class Tweet

    attr_reader :message
    attr_reader :user

    @@all_messages = []

    def initialize(message, user)
        @message = message
        @user = user
        self.class.all << self
    end

    def username
        self.user.username
    end

    def self.all
        @@all_messages
    end
    
    def self.print_all_messages
        self.all.each do |tweet|
            puts tweet.message
        end
    end
end

