import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { getMovies } from "./Redux/actions";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const SearchApi =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const searchMovie = (e) => {
    setSearchTerm(e.target.value);
    dispatch(getMovies(`${SearchApi}${searchTerm}`));
  };
  return (
    <div className={"searchContainer"}>
      <SearchIcon fontSize="medium" style={{ color: "#fff" }} />
      <form>
        <input
          variant="outlined"
          className={"searchInput"}
          type="text"
          placeholder={"Search Movie"}
          onChange={(e) => searchMovie(e)}
        />
      </form>
    </div>
  );
}
