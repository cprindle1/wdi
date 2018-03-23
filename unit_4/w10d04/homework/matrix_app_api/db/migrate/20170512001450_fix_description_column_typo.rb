class FixDescriptionColumnTypo < ActiveRecord::Migration[5.0]
  def change
    rename_column :characters, :descrption, :description
  end
end
