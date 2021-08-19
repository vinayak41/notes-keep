import React from "react";
import Masonry from "react-masonry-css";
import { makeStyles } from "@material-ui/core";
import Note from "./Note";

const useStyles = makeStyles((theme) => ({
  masonryGrid: {
    display: "flex",
    width: "100%",
    padding: "2rem 1rem"
  },
  masonaryGridColumn: {
    paddingLeft: "1rem",
    backgroundClip: "padding-box",
    "&>div": {
        marginBottom: "1rem"
    }
  },
}));

const breakPoints = {
  default: 4,
  1100: 3,
  836: 2,
  500: 1,
};

const NotesContainer = ({notes}) => {
  const classes = useStyles();
  return (
    <Masonry
      breakpointCols={breakPoints}
      className={classes.masonryGrid}
      columnClassName={classes.masonaryGridColumn}
    >
      {notes ? notes.map( note => <Note key={note.noteId} note={note} />) : null }
    </Masonry>
  );
};

export default NotesContainer;
