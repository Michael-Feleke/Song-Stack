import axios from "axios";
import supabase from "./supabase";

const BASE_URL = "https://michael-feleke.github.io/host_api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchSongs = async () => {
  let { data, error } = await supabase.from("songs").select("*");

  if (error) {
    console.error(error);
    throw new Error("Songs could not be fetched");
  }

  return data;
};

export const postCreatedSong = async (song) => {
  const { data, error } = await supabase.from("songs").insert([song]).select();

  if (error) {
    console.error(error);
    throw new Error("Songs could not be created");
  }

  return data;
};

export const deleteSongById = async (id) => {
  const { error } = await supabase.from("songs").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Songs could not be deleted");
  }
};

export const updateSongById = async (id, updatedSong) => {
  const { data, error } = await supabase
    .from("songs")
    .update([updatedSong])
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
    throw new Error("Songs could not be updated");
  }

  return data;
};

export default api;
