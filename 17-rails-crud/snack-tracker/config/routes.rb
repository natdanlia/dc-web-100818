Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get "/foods/test", to: "snacks#test", as: "the_test"
  root "snacks#home"
  resources :snacks
end
