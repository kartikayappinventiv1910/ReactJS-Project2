import React from "react";
import { Box, makeStyles, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  searchContainer: {
    borderRadius:"15px",
    width: "80%",
    margin: "auto",
    padding: "0.5rem 1rem",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },

  searchInput: {
    borderRadius:"15px",
    width: "100%",

    "& .PrivateNotchedOutline-root-9": {
      border: "none",
    },

    "& .MuiOutlinedInput-input": {
      padding: "0.5rem 1rem",
    },
  },
});

export default function SearchBar({ setSearchText }) {
  const classes = useStyles();
  return (
    <Box className={classes.searchContainer}>
      <SearchIcon fontSize="large" />
      <TextField
        variant="outlined"
        className={classes.searchInput}
        type="text"
        placeholder={"Search Note"}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </Box>
  );
}
