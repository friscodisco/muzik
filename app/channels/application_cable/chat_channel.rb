class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_channel'
  end

  def unsubscribed
    stop_all_streams
  end

  def speak data
    message_params = data["message"]
    message = Message.create!(content: message_params["content"], user_id: message_params["user_id"])
    broadcast_message(message)
  end

  def broadcast_message message
    ActionCable.server.broadcast 'chat_channel', content: message.content, user_name: message.user_name
  end
end
