class AddVehicles < ActiveRecord::Migration[5.0]
  def change
    create_table :vehicles do |t|
      t.string :name
      t.string :style
    end
    add_column :characters, :vehicle_id, :integer
  end
end
