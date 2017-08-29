Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :users, only: [:create, :show]
    resources :restaurants, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
    resources :tables, only: [:index, :show]
    resources :reservations, only: [:index, :show, :create, :update, :destroy] do
      resource :reviews, only: [:show, :create, :edit]
    end
    resource :session, only: [:create, :destroy]
  end
end
