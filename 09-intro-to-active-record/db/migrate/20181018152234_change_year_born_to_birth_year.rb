class ChangeYearBornToBirthYear < ActiveRecord::Migration[5.2]
  def change
    rename_column :authors, :year_born, :birth_year
  end
end
