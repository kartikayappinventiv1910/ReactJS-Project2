import axios from "axios";
import { MOVIE_SUCCESS, MOVIE_FAILURE } from "./actionNames";

export const MovieSuccess = (movies) => {
  return {
    type: MOVIE_SUCCESS,
    payLoad: movies,
  };
};

export const MovieFailure = (error) => {
  return {
    type: MOVIE_FAILURE,
    payLoad: error,
  };
};

export const getMovies = (url) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url);

      setTimeout(() => {
        dispatch(MovieSuccess(response.data.results));
      }, 1000);
    } catch (error) {
      dispatch(MovieFailure(error));
    }
  };
};
