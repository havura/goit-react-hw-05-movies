import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b5a1acbad7593bfe1c613cd5ce61db84';

export const getTrending = () => {
  const data = axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
  return data;
};

export const getSearchMovie = query => {
  const data = axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data;
};

export const getMovieById = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  console.log(data);
  return data;
};

export const getMovieCredits = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const getMovieReviews = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};
