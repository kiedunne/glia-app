class FixBodyName < ActiveRecord::Migration[5.2]
  def change
    rename_column :notes, :body, :description
  end
end
