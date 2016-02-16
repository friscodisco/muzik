Rails.application.routes.draw do
  root to: 'root#index'

  resources 'users'
  resources 'rooms'

  mount ActionCable.server => '/cable'
end
