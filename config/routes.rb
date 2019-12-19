Rails.application.routes.draw do
  scope '/api' do
    resources :results
    resources :funnel_steps
    resources :assumptions
    resources :calculations
    resources :users

    # Calculation Routes
    get '/calculations/:id/assumptions' => 'calculations#assumptions'
    get '/calculations/:id/funnel_steps' => 'calculations#funnel_steps'

    # Result Routes
    get '/calculations/:id/result' => 'calculations#result'
    get '/calculations/:id/result/runrate' => 'calculations#runrate'
    get '/calculations/:id/result/funnel_breakdown' => 'calculations#funnel_breakdown'
    get '/calculations/:id/result/conversion_values' => 'calculations#conversion_values'
    get '/calculations/:id/result/leaking_volume' => 'calculations#leaking_volume'

    
  end
end
