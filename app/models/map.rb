class Map < ActiveRecord::Base
  attr_accessible :width, :height

  has_many :terrains

  after_create :make_terrain

  def make_terrain
    (self.width * self.height).times do
      self.terrains.create()
    end
  end
end
