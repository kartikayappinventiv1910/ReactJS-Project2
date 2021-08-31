import { combineReducers } from "redux";
import { movieReducer } from "./moviessrc/Redux/reducer";

export const rootReducer = combineReducers({
  movieReducer,
});