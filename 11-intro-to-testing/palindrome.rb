require 'pry'

class PalindromeChecker

    def is_palindrome?(str)
        if str.class != String
            raise ArgumentError
        end
        str.downcase!
        str.gsub!(/[\W]/, "")
        if str.length <= 1
            return true
        end
        if str[0] == str[-1]
            return is_palindrome?(str[1...-1])
        else
            return false
        end
    end
end