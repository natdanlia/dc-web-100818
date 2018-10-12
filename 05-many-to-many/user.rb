class User

    attr_reader :username


    def initialize(username)
        @username = username
    end

    def tweets
        # returns array of all tweets belonging to this User
        Tweet.all.select {|tweet| tweet.user == self}
    end

    def post_tweet(message)
        #post_tweet` that takes a message, creates a new tweet, 
        #and adds it to the user's tweet collection
        Tweet.new(message, self)
    end

    def like_tweet(tweet)
        if self.liked_tweets.include?(tweet)
            return "You already liked that, dummy"
        else 
            Like.new(self, tweet)
        end

    end

    def liked_tweets
        # returns array of all tweets this User has liked
        # go through all likes
        # select the likes that have this user on them
        likes = Like.all.select {|like| like.user == self }
        likes.collect {|like| like.tweet}
    end

    def unlike_tweet(tweet)
        Like.all.delete_if {|like| like.user == self && like.tweet == tweet}
    end
end

