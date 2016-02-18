class AddImageNameToRoom < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :image_name, :string
  end
end
