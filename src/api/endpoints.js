export const ENDPOINTS = {
  TRENDING: "/trending/movie/day",
  POPULAR_MOVIES: "/movie/popular",
  POPULAR_TV: "tv/popular",
  TOP_PATED: "/movie/top_rated",
  NOW_PLAYING: "movie/now_playing",
  SEARCH: "/search/movie",
  DETAILS: (id) => `/movie/${id}`,
  GENRES: "/genre/movie/list",
};
