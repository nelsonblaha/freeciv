class AddDefaultToBiome < ActiveRecord::Migration
  def change
    change_column :terrains, :biome, :integer, default: 7
  end
end
