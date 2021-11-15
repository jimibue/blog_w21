Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # path        #where to go when I get the path
  get "/pages", to: "pages#index"
end
