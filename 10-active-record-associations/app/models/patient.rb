class Patient < ActiveRecord::Base
    belongs_to :doctor
    delegate(:hospital, {:to => :doctor})
end