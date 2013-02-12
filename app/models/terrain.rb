class Terrain < ActiveRecord::Base
  attr_accessible :city_id, :civ_id, :lat, :lng, :biome

  def biome_string
  	case self.biome
    	  when 0
    	   "glacier"
        when 1
          "desert"
        when 2
          "forest"
        when 3
          "grassland"
        when 4
          "hills"
        when 5
          "jungle"
        when 6
          "mountains"
        when 7
          "ocean"
        when 8
          "plains"
        when 9
          "swamp"
        when 10
          "tundra"
        else
          "ocean"
    	end
  end
end
