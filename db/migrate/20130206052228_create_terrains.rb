class CreateTerrains < ActiveRecord::Migration
  def change
    create_table :terrains do |t|
      t.integer :type
      t.integer :lat
      t.integer :lng
      t.integer :civ_id
      t.integer :city_id

      t.timestamps
    end
  end
end
