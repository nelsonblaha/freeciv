class AddMapIdToTerrains < ActiveRecord::Migration
  def change
    add_column :terrains, :map_id, :integer
  end
end
