class CreatePlaylistTrackJoinTable < ActiveRecord::Migration
  def change
    create_join_table :playlists, :tracks
  end
end
