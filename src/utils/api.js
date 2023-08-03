import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'ba5b4503fa86b6d45d6ec695ac0f7bd8';

export const getMovies = page => {
  return axios('trending/movie/day', {
    params: {
      api_key: API_KEY,
      page,
    },
  });
};

export const getMovieDetails = id => {
  return axios(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getMovieReviews = id => {
  return axios(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getMovieCredits = id => {
  return axios(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getSearchMovies = query => {
  return axios('search/movie', {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
};
