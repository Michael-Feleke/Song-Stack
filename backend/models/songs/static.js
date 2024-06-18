export async function getAllSongs() {
  return this.find({}).sort({ createdAt: -1 });
}

export async function createOneSong(newSong) {
  return this.create(newSong);
}
