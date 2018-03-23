class RemoveDetailsInTodos < ActiveRecord::Migration[5.0]
  def change
    remove_column :todos, :details, :string
  end
end
