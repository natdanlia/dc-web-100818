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

    def likers
        # returns a collection of all the
        # Users who have liked this tweet

        # look at all likes
        # select/find the ones that have this tweet
        likes = Like.all.select {|like| like.tweet==self}
        # collect the users
        likes.collect {|like| like.user}
    end

end

