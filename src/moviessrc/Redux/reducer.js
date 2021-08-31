import { MOVIE_SUCCESS, MOVIE_FAILURE } from "./actionNames";

const initialState = {
  movies: [],
  error: "",
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SUCCESS: {
      return {
        movies: action.payLoad,
        error: "",
      };
    }

    case MOVIE_FAILURE: {
      return {
        movies: [],
        error: action.payLoad,
      };
    }
    default:
      return state;
  }
};
