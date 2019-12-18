Rails.application.routes.draw do
  scope '/api' do
    resources :results
    resources :funnel_steps
    resources :assumptions
    resources :calculations
    resources :users

    get '/calculations/:id/assumptions' => 'calculations#assumptions'
    get '/calculations/:id/funnel_steps' => 'calculations#funnel_steps'
    get '/calculations/:id/result' => 'calculations#result'
  end
end
