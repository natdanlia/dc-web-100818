class Hospital < ActiveRecord::Base
    has_many :doctors
    has_many(:patients, {through: :doctors})

    def patient_roster
        self.patients.each do |patient|
            puts "I am a patient at #{self.name}.  My name is #{patient.name}"
        end
        nil

    end
end