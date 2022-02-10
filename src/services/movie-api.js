import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const MOVIE_API_KEY = "a89b03c28f1cd3b25a7da78bf74e4fe0";

async function getMoviesOrError(url, query = "") {
  const response = await axios.get(url);
  return !response?.data
    ? Promise.reject(new Error(`No results for query ${query}`))
    : response.data;
}

export async function getTrendingDayMovies(page=1) {
  return await getMoviesOrError(
    `/trending/movie/day?api_key=${MOVIE_API_KEY}&page=${page}&include_adult=false`,
  );
}

export async function getSearchMovies(query, page) {
  return await getMoviesOrError(
    `/search/movie?query=${query}&api_key=${MOVIE_API_KEY}&page=${page}&include_adult=false`,
  );
}
  
  export async function getMovieDetails(movieId) {
    return await getMoviesOrError(
      `/movie/${movieId}?api_key=${MOVIE_API_KEY}`,
    );
  } 

  export async function getMovieCredits(movieId) {
    return await getMoviesOrError(
      `/movie/${movieId}/credits?api_key=${MOVIE_API_KEY}`,
    );
  } 

  export async function getMovieReviews(movieId, page) {
    return await getMoviesOrError(
      `/movie/${movieId}/reviews?api_key=${MOVIE_API_KEY}&page=${page}`,
    );
  } 

