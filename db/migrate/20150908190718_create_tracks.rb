class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :artist
      t.string :album
      t.string :genre
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
