class AddYearBornToAuthorTable < ActiveRecord::Migration[5.2]
  def change
    add_column :authors, :year_born, :integer
  end
end
