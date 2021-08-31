import React, { useState } from "react";
import { Box, Button, makeStyles } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  noteContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  textArea: {
    border: "none",
    resize: "none",
    padding: "0.5rem 1rem",
    fontSize: "16px",

    "&:focus": {
      outline: "none",
    },
  },

  saveBtn: {
    width: "100%",
    margin: "0 auto",
    backgroundColor: "#FFFF66",
    fontWeight: "bold",
    borderRadius: "0",

    "&:hover": {
      backgroundColor: "#FFFF00",
    },
  },
});

export default function AddNote({ addNote }) {
  const classes = useStyles();

  const [noteText, setNoteText] = useState("");

  const saveNote = () => {
    if (noteText.trim().length > 0) {
      addNote(noteText);
      setNoteText("");
    }
  };

  return (
    <Box className={classes.noteContainer}>
      <textarea
        className={classes.textArea}
        rows="10"
        value={noteText}
        placeholder="Enter Text"
        onChange={(e) => setNoteText(e.target.value)}
      />

      <Button
        onClick={saveNote}
        startIcon={<AddIcon />}
        className={classes.saveBtn}
      >
        {"Add"}
      </Button>
    </Box>
  );
}
