class AddNotesId < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.text :body
      t.string :title
      t.datetime :date
    end
  end
end 