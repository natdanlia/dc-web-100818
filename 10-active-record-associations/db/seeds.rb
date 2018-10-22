require_relative '../config/environment.rb'

Doctor.destroy_all
Patient.destroy_all
Hospital.destroy_all

sacred_heart = Hospital.create(name: "Sacred Heart", address: "123 Scrub St")

elliot = Doctor.create(name: "Elliot Reed", specialty: "Endocrinology", hospital: sacred_heart)
jd = Doctor.create(name: "John Dorian", specialty: "General Medicine", hospital: sacred_heart)

mrs_wilke = Patient.create(name: "Mrs. Wilke", doctor: jd)
johnny = Patient.create(name: "Johnny the Tackling Alzheimer's Patient", doctor: elliot)
pickles = Patient.create(name: "Mr. Pickles", doctor: jd)