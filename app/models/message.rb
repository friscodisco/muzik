class Message < ActiveRecord::Base
  validates :content, presence: true
  validates :user_id, presence: true

  belongs_to :user

  def user_name
    user.name
  end
end
