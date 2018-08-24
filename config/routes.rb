Rails.application.routes.draw do
  resources :resultados
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  scope '/api' do
    resources :resultados
  end
end
