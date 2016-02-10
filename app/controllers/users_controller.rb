class UsersController < ApplicationController
  def create
    @user = User.new(create_params)

    if @user.save
      render json: @user, status: 201
    else
      render json: { error: "User couldn't be created" }, status: 422
    end
  end

  def show
    @user = User.find(params[:id])

    render json: @user, status: 200
  end

  private

  def create_params
    params.require(:user).permit(:name)
  end
end
