class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      auth_login(@user)
      redirect_to root_path
    else
      render 'new'
    end
  end

  def new
    @user = User.new
  end

  def destroy
  end

private
  def user_params
    params.require(:user).permit(:name, :password)
  end

end
