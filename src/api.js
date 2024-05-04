import axios from "axios";

const BASE_URL = "http://localhost:3001";

const api = axios.create({
  baseURL: BASE_URL,
});

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

export const fetchSongs = async () => {
  try {
    const response = await api.get("/songs");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch songs");
  }
};

export const postCreatedSong = async (song) => {
  await api.post(
    "/songs",
    { ...song, id: generateId() },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  try {
    await api.post("/songs", song, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("Failed to post song");
  }
};

export const deleteSongById = async (id) => {
  try {
    await api.delete(`/songs/${id}`);
  } catch (error) {
    throw new Error("Failed to delete song");
  }
};

export const uploadSongImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.url;
  } catch (error) {
    throw new Error("Failed to upload image");
  }
};

export default api;
