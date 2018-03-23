class FixMessUp < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :product_id, :integer
    remove_column :products, :product_id, :integer

  end
end
