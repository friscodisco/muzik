class Message < ActiveRecord::Base
  validates :content, presence: true
  validates :user_id, presence: true
  validates :room_id, presence: true

  belongs_to :user
  belongs_to :room

  def user_name
    user.name
  end

  def room_id
    room.id
  end
end
