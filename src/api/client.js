import axios from "axios";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export async function apiFetch(endpoint, params = {}) {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.status_message ||
      error.message ||
      "API Request Failed";
    throw new Error(errorMessage);
  }
}
