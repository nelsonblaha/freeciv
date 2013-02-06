class ChangeTypeToBiome < ActiveRecord::Migration
  def change
  	rename_column :terrains, :type, :biome
  end
end
