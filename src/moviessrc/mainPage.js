import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "./Redux/actions";
import DisplayMovies from "./displayMovies";
import SearchBar from "./searchBar";
import "./style.css";

export default function MoviePage() {
  const dispatch = useDispatch();
  const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page";

  useEffect(() => {
    dispatch(getMovies(APIURL));
  }, []);

  return (
    <div className={"mainContainer"}>
      <h1 className={"mainHeading"}>{"Movies Collection"}</h1>
      <SearchBar />
      <DisplayMovies />
    </div>
  );
}
