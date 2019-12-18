class CreateAssumptions < ActiveRecord::Migration[5.2]
  def change
    create_table :assumptions do |t|
      t.string :name
      t.integer :value
      t.belongs_to :calculation, foreign_key: true

      t.timestamps
    end
  end
end
