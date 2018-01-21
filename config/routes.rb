Rails.application.routes.draw do

	root 'pages#index', as: 'home' 
	get 'products' => 'products#products'
	get 'contact' => 'pages#contact'
	post 'contact' => 'pages#contact'
	post 'create_contact' => 'pages#create'
	get 'product_description' => 'products#product_description'

 
	resources :pages

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
