import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import NoteAdded from "./NoteAdded";
import AddNote from "./AddNote";

const useStyles = makeStyles({
  notesContainer: {
    width: "82%",
    margin: "2rem auto",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px , 1fr))",
  },
});

export default function NotesList(props) {
  const classes = useStyles();
  const { notes, addNote, deleteNote } = props;
  return (
    <Box className={classes.notesContainer}>
      {notes?.map((note, index) => {
        return (
          <NoteAdded
            id={note.noteId}
            noteText={note.noteText}
            deleteNote={deleteNote}
            key={index}
          />
        );
      })}

      <AddNote addNote={addNote} />
    </Box>
  );
}
