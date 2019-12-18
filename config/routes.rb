Rails.application.routes.draw do
  scope '/api' do
    resources :results
    resources :funnel_steps
    resources :assumptions
    resources :calculations
    resources :users
  end
end
