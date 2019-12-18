Rails.application.routes.draw do
  resources :results
  resources :funnel_steps
  resources :assumptions
  resources :calculations
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
