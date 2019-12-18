class CreateFunnelSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :funnel_steps do |t|
      t.string :name
      t.integer :value
      t.belongs_to :calculation, foreign_key: true

      t.timestamps
    end
  end
end
