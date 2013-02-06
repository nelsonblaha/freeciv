class ChangeCircumferenceToHeight < ActiveRecord::Migration
  def change
  	rename_column :maps, :circumference, :width
  end
end
