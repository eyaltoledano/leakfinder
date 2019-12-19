class AddConversionValueToFunnelStep < ActiveRecord::Migration[5.2]
  def change
    add_column :funnel_steps, :conversion_value, :float
  end
end
