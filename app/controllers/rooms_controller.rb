class RoomsController < ApplicationController
  def index
    @rooms = Room.all
  end

  def new
    @new_room = Room.new
  end

  def create
    @room = Room.new(room_params)

    if @room.save
      redirect_to @room
    else
      render json: { error: "Couldn't create room" }, status: 422
    end
  end

  def show
    @room = Room.find(params[:id])
    @messages = @room.messages
  end

  private

  def room_params
    params.require(:room).permit(:name)
  end
end
