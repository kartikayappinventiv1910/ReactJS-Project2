import React, { useEffect, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { nanoid } from "nanoid";

import SearchBar from "./searchBar";
import NotesList from "./NotesList";

const useStyles = makeStyles({
  mainContainer: {
    boxSizing: "border-box",
    width: "100%",
    height: "100vh",
    padding: "2rem",
    backgroundColor: "#6d4d91",
  },

  heading: {
    fontWeight: "bold",
    letterSpacing: "1.5px",
    marginBottom: "1rem",
    textTransform: "uppercase",
    color: "#fff",
  },
});
export default function NotesApp() {
  const classes = useStyles();

  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const notesAdded = JSON.parse(localStorage.getItem("notesData"));
    if (notesAdded) {
      setNotes(notesAdded);
    }
  }, []);

  const addNote = (noteText) => {
    const newNote = {
      noteId: nanoid(),
      noteText: noteText,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note?.noteId !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(notes));
  }, [notes]);

  return (
    <Box className={classes.mainContainer}>
      <Typography variant="h4" className={classes.heading}>
        {"Notes"}
      </Typography>

      <SearchBar setSearchText={setSearchText} />

      <NotesList
        notes={notes.filter((note) =>
          note.noteText.toLowerCase().includes(searchText)
        )}
        addNote={addNote}
        deleteNote={deleteNote}
      />
    </Box>
  );
}
