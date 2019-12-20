# Eventual form data on the FE
# email:test@test.com
# calculation[name]:API Test Funnel
# calculation[time_dimension]:30
# calculation[assumptions][average_order_value]:150
# calculation[funnel_steps][visits]:10000
# calculation[funnel_steps][purchases]:900
# calculation[funnel_steps][retained]:760

# This is what the Calculation API request should be sending
params = {
  email: 'test@test.com',
  calculation: {
    name: "Ecommerce Test Funnel",
    time_dimension: 30,
    assumptions: { average_order_value: 150 },
    funnel_steps: { "visits": "1000", "purchases": "90", "retained": "76" }
}

# Step 1
calculation = Calculation.new(name: params[:calculation][:name], time_dimension: params[:calculation][:time_dimension])
calculation.user = User.create(email: params[:email])
calculation.save

# Step 2
params[:calculation][:assumptions].each do |assumption_key, assumption_value|
  calculation.assumptions.create(name: assumption_key.to_s.titlecase, value: assumption_value.to_i)
end

params[:calculation][:funnel_steps].each do |step_key, step_value|
  calculation.funnel_steps.create(name: step_key.to_s.titlecase, value: step_value.to_i)
end

calculation.result = Result.create
