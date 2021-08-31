import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  noteContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFFF66",
    padding: "0.5rem 1rem",
    textAlign: "left",
    minHeight: "220px",
    position: "relative",
    borderRadius:"15px"
  },

  noteText: {
    fontSize: "16px",
  },

  deleteNote: {
    cursor: "pointer",
    position: "absolute",
    right: "0.5rem",
    bottom: "0.5rem",
  },
});

export default function NoteAdded(props) {
  const classes = useStyles();

  const { id, noteText, deleteNote } = props;
  return (
    <Box className={classes.noteContainer}>
      <Typography className={classes.noteText}>{noteText}</Typography>

      <DeleteIcon
        className={classes.deleteNote}
        onClick={() => deleteNote(id)}
      />
    </Box>
  );
}
