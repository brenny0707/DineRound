Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :users, only: [:create, :show] do
      resources :favorites, only: [:index]
    end
    resources :restaurants, only: [:index, :show] do
      resources :reviews, only: [:index]
      resources :favorites, only: [:create, :destroy]
    end
    resources :tables, only: [:index, :show]
    resources :reservations, only: [:index, :show, :create, :update, :destroy] do
      resource :reviews, only: [:show, :create, :update]
    end
    resource :session, only: [:create, :destroy]
  end
end
