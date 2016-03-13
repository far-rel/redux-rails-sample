Rails.application.routes.draw do

  resources :todos, only: [:create, :index]

  root to: 'home#index'

end
