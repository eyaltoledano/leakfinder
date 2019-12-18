# This is what the Calculation API GET request should be outputting
state = {
  name: "Ecommerce Test Funnel",
  time_dimension: 30,
  assumptions: { average_order_value: 150 },
  funnel_steps: { "visits": "1000", "purchases": "90" },
  email: 'test@test.com'
}

# Step 1
calculation = Calculation.new(name: state[:name], time_dimension: state[:time_dimension])
calculation.user = User.create(email: 'john@doe.com')
calculation.save # cannot call create in Step 2 unless calculation is persisted

# Step 2
state[:assumptions].each do |assumption_key, assumption_value|
  calculation.assumptions.create(name: assumption_key.to_s.titlecase, value: assumption_value.to_i)
end

state[:funnel_steps].each do |step_key, step_value|
  calculation.funnel_steps.create(name: step_key.to_s.titlecase, value: step_value.to_i)
end

# Step 3
calculation.user.email = state[:email]
calculation.user.save

calculation.result = Result.create
