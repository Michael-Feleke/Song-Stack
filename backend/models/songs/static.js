export async function getAllOwnSongs(_id) {
  return this.find({ createdBy: _id }).sort({ createdAt: -1 });
}

export async function getAllSongs() {
  return this.find().sort({ createdAt: -1 });
}

export async function getSongById(id) {
  return this.findById(id);
}

export async function createNewSong(newSong) {
  return this.create(newSong);
}

export async function deleteSongById(id) {
  return this.findOneAndDelete(id);
}

export async function updateSongById(idObj, bodyObj) {
  return this.findOneAndUpdate(idObj, bodyObj);
}
