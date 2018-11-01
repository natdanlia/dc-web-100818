class CreateShips < ActiveRecord::Migration
  def change
    create_table :ships do |t|
      t.string :name
      t.string :ship_type
      t.string :booty
      t.integer :pirate_id
      t.timestamps null: false
    end
  end
end
