class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_channel'
  end

  def unsubscribed
    stop_all_streams
  end

  def speak data
    ActionCable.server.broadcast 'chat_channel', message: data["message"]
  end
end
