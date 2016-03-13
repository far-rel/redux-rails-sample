class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos, id: false do |t|
      t.uuid :id
      t.text :content

      t.timestamps null: false
    end
  end
end
