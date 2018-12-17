class CreateDoctorsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |t|
        t.string :name
        t.string :specialty
        t.integer :hospital_id
    end
  end
end
