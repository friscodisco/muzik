class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_channel_#{ params[:room_id] }"
  end

  def unsubscribed
    stop_all_streams
  end

  def speak data
    message = Message.create!(new_message_params(data))
    broadcast_message(message)
  end

  def broadcast_message message
    ActionCable.server.broadcast "chat_channel_#{ message.room_id }", content: message.content, user_name: message.user_name
  end

  def new_message_params data
    message_params = data["message"]
    { content: message_params["content"], user_id: message_params["user_id"], room_id: message_params["room_id"] }
  end
end
