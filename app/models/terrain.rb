class Terrain < ActiveRecord::Base
  attr_accessible :city_id, :civ_id, :lat, :lng, :biome

  def biome_string
  	case self.biome
	  	when 0
	  		"ocean"
	  	when 1
	  		"plains"
  	end
  end
end
