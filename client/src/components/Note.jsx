import { Paper } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import {
  deleteNoteForever,
  deleteNote,
  restoreNote
} from "../redux/actions/noteActions";
import RestoreFromTrashOutlinedIcon from "@material-ui/icons/RestoreFromTrashOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import ColorMenu from "./ColorMenu";
import NoteEditor from "./NoteEditor";

const useStyles = makeStyles((theme) => ({
  note: {
    padding: "1rem 1.5rem 2.3rem",
    wordBreak: "break-all",
    borderRadius: "1rem",
    position: "relative",
    "&:hover > .MuiToolbar-root": {
      display: "block"
    }
  },
  toolbar: {
    position: "absolute",
    bottom: "0px",
    display: "none"
  },
  noteContent: {
    minHeight: "5rem",
    marginBottom: "5px",
    "&>*": {
      margin: "0rem"
    }
  }
}));

const Note = ({ note }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { noteContent, noteId, isDeleted, color } = note;
  const [anchorEl, setAnchorEl] = useState(null);
  const [openNoteEditor, setOpenNoteEditor] = useState(false);

  const handleDelete = () => {
    if (isDeleted) dispatch(deleteNoteForever(noteId));
    else dispatch(deleteNote(noteId));
  };

  const handleRestore = () => {
    dispatch(restoreNote(noteId));
  };

  const handleOpenColorMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleNoteEdit = () => {
    setOpenNoteEditor(true)
  }

  return (
    <>
    <NoteEditor open={openNoteEditor} setOpen={setOpenNoteEditor} note={note} />
    <Paper elevation={3} className={classes.note} style={{backgroundColor: `${color ?? null}`}}>
      {(
        <div
          dangerouslySetInnerHTML={{ __html: noteContent }}
          className={classes.noteContent}
        />
      ) || <span>Enpty 🗒 </span>}
      <Toolbar variant="dense" className={classes.toolbar}>
        {!isDeleted ? (
          <>
            <IconButton onClick={handleOpenColorMenu}>
              <ColorLensOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleNoteEdit}>
              <EditOutlinedIcon />
            </IconButton>
          </>
        ) : null}
        <IconButton onClick={handleDelete}>
          {isDeleted ? <DeleteForeverOutlinedIcon /> : <DeleteOutlineIcon />}
        </IconButton>
        {isDeleted ? (
          <IconButton onClick={handleRestore}>
            <RestoreFromTrashOutlinedIcon />
          </IconButton>
        ) : null}
      </Toolbar>
    </Paper>
    <ColorMenu noteId={noteId} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};

export default Note;
