require_relative "../palindrome.rb"

describe "PalindromeChecker" do
    
    let (:checker) {PalindromeChecker.new}

    it "returns true when input is 'tacocat'" do
        expect(checker.is_palindrome?('tacocat')).to be (true)
    end

    it "returns false when input is 'tacocats'" do 
        expect(checker.is_palindrome?('tacocats')).to be (false)
    end

    it "ignores spaces" do 
        expect(checker.is_palindrome?('go hang a salami im a lasagna hog')).to be (true)
    end

    it "ignores capitalization" do
        expect(checker.is_palindrome?("Madam")).to be (true)
    end

    it "ignores punctuation" do
        expect(checker.is_palindrome?("aman,aplan,acanal,panama")).to be (true)
    end

    it "raises an Error if input is not a string" do 
        expect { checker.is_palindrome?(7) }.to raise_error ArgumentError
    end 
end