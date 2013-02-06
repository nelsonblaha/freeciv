class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      t.integer :circumference
      t.integer :height

      t.timestamps
    end
  end
end
