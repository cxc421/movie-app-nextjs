import axios from "axios";

const BASE_URL = "http://localhost:3000";

const MOVIE_DATA = [];

const getMovies = () =>
  axios.get(`${BASE_URL}/api/v1/movies`).then((res) => res.data);

const getMovieById = (id) =>
  axios.get(`${BASE_URL}/api/v1/movies/${id}`).then((res) => res.data);

const CATEGORY_DATA = [
  { id: "c-0", name: "all" },
  { id: "c-1", name: "drama" },
  { id: "c-2", name: "action" },
  { id: "c-3", name: "adventure" },
  { id: "c-4", name: "historical" },
];

const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
      // reject('Cannot fetch data!')
    }, 50);
  });
};

const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 5);
  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then((res) => res.data);
};

const deleteMovie = (id) => {
  return axios
    .delete(`${BASE_URL}/api/v1/movies/${id}`)
    .then((res) => res.data);
};

const updateMovie = (movie) => {
  return axios
    .patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then((res) => res.data);
};

const getPosts = () => {
  return axios.get(`${BASE_URL}/api/v1/posts`).then((res) => res.data);
};

export {
  getMovies,
  getMovieById,
  getCategories,
  createMovie,
  deleteMovie,
  updateMovie,
  getPosts,
};
