class CreateResults < ActiveRecord::Migration[5.2]
  def change
    create_table :results do |t|
      t.belongs_to :calculation, foreign_key: true

      t.timestamps
    end
  end
end
