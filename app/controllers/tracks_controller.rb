class TracksController < ApplicationController
  def index
  end

  def create
    @track = auth_current_user.tracks.new(track_params)

    if @track.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def new
    if auth_logged_in?
      @track = Track.new
      render 'new'
    else
      redirect_to root_path
    end
  end

  def edit
  end

  def update
    binding.pry
    @track = Track.find(params[:id])
    @track.update_attributes(track_params)
    if @track.save
      @track.to_json
    end
  end

  def destroy
  end

private
  def track_params
    params.require(:track).permit(:title, :artist, :album, :genre)
  end
end
