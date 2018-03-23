class AddForeignKeyToPrices < ActiveRecord::Migration[5.0]
  def change
    add_column :stocks, :price_id, :decimal
  end
end
