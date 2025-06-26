class CreateClickcounts < ActiveRecord::Migration[7.2]
  def change
    create_table :clickcounts do |t|
      t.integer :count

      t.timestamps
    end
  end
end
