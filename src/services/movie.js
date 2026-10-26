import { apiFetch } from "../api/client";
import { ENDPOINTS } from "../api/endpoints";

export const MovieService = {
  async getTrending() {
    const data = await apiFetch(ENDPOINTS.TRENDING);
    return data.results;
  },

  async getPopularMovies() {
    const data = await apiFetch(ENDPOINTS.POPULAR_MOVIES);
    return data.results;
  },

  async getPopularTV() {
    const data = await apiFetch(ENDPOINTS.POPULAR_TV);
    return data.results;
  },

  async getTopRated() {
    const data = await apiFetch(ENDPOINTS.TOP_PATED);
    return data.results;
  },
  async getNowPlaying() {
    const data = await apiFetch(ENDPOINTS.NOW_PLAYING);
    return data.results;
  },

  async search(query) {
    const data = await apiFetch(ENDPOINTS.SEARCH, { query });
    return data.results;
  },

  async getDetails(id) {
    return await apiFetch(ENDPOINTS.DETAILS(id));
  },

  async getGenres() {
    const data = await apiFetch(ENDPOINTS.GENRES);
    return data.genres;
  },
};
