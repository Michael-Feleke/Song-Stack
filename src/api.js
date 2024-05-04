import axios from "axios";

const BASE_URL = "http://localhost:3001";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchSongs = async () => {
  try {
    const response = await api.get("/songs");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch songs");
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
