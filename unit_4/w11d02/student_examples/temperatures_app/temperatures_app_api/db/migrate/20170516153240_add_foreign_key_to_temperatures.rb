class AddForeignKeyToTemperatures < ActiveRecord::Migration[5.0]
  def change
    add_column :temperatures, :location_id, :integer
  end
end
