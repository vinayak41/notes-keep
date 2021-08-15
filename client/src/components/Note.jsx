import { Paper } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { deleteNoteForever, deleteNote, restoreNote } from "../redux/actions/noteActions";
import RestoreFromTrashOutlinedIcon from "@material-ui/icons/RestoreFromTrashOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

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
  const { noteContent, noteId, isDeleted } = note;

  const handleDelete = () => {
    console.log(isDeleted);
    if (isDeleted) dispatch(deleteNoteForever(noteId));
    else dispatch(deleteNote(noteId));
  };
  
  const handleRestore = () => {
    dispatch(restoreNote(noteId))
  }
  return (
    <Paper elevation={3} className={classes.note}>
      {(
        <div
          dangerouslySetInnerHTML={{ __html: noteContent }}
          className={classes.noteContent}
        />
      ) || <span>Enpty 🗒 </span>}
      <Toolbar variant="dense" className={classes.toolbar}>
        {!isDeleted ? (
          <>
            <IconButton>
              <ColorLensOutlinedIcon />
            </IconButton>
            <IconButton>
              <EditOutlinedIcon />
            </IconButton>
          </>
        ) : null}
        <IconButton onClick={handleDelete}>
          {isDeleted ? <DeleteForeverOutlinedIcon /> : <DeleteOutlineIcon />}
        </IconButton>
        <IconButton onClick={handleRestore}>
          {isDeleted ? <RestoreFromTrashOutlinedIcon /> : null}
        </IconButton>
      </Toolbar>
    </Paper>
  );
};

export default Note;
