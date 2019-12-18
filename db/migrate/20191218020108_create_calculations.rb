class CreateCalculations < ActiveRecord::Migration[5.2]
  def change
    create_table :calculations do |t|
      t.string :name
      t.integer :time_dimension
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
