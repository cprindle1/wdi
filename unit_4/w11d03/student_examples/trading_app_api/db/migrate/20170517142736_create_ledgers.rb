class CreateLedgers < ActiveRecord::Migration[5.0]
  def change
    create_table :ledgers do |t|
      t.references :trader, foreign_key: true
      t.references :commodity, foreign_key: true
      t.integer :qty

      t.timestamps
    end
  end
end
