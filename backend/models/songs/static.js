export async function getAllSongs() {
  return this.find({}).sort({ createdAt: -1 });
}

export async function getOneSong(id) {
  return this.findById(id);
}

export async function createOneSong(newSong) {
  return this.create(newSong);
}
