import React from "react";
import { makeStyles, Backdrop, Card } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function DisplayMovies() {
  const classes = useStyles();
  const { movies } = useSelector((state) => state.movieReducer);

  const imgPath = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="movieContainer">
      {movies.length !== 0 ? (
        <>
          {movies.map((movie, index) => {
            return (
              <Card key={index} className={"movieCardContainer"}>
                <img src={`${imgPath}${movie?.poster_path}`} />
                <h3>{movie.title}</h3>
                <div>
                  <p>{`Release Date: ${movie.release_date}`}</p>
                  <p>{`Rating: ${movie.vote_average}`}</p>
                </div>

                <div className={"movieDesc"}>
                  <h3>{"Overview"}</h3>
                  <p>{movie.overview}</p>
                </div>
              </Card>
            );
          })}
        </>
      ) : (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
}
