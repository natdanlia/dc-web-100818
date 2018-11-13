Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get "/foods/test", to: "snacks#test", as: "the_test"
  root "snacks#home"
  resources :snacks
  resources :retailers, only: [:index, :show, :new, :create]
  resources :users, only: [:new, :create]
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
