class ChangeDescriptionInTodosToDetails < ActiveRecord::Migration[5.0]
  def change
    rename_column :todos, :description, :details
  end
end
