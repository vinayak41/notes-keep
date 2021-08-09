import { Paper } from "@material-ui/core";
import React from "react";
import {useDispatch} from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import {deleteNote} from "../redux/actions/noteActions"

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

const Note = ({note}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {noteContent, noteId} = note;
  const handleDelete = () => {
    dispatch(deleteNote(noteId))
  }
  return (
    <Paper elevation={3} className={classes.note}>
      {<div dangerouslySetInnerHTML={{__html: noteContent}} className={classes.noteContent} /> || <span>Enpty 🗒 </span>}
      <Toolbar variant="dense" className={classes.toolbar}>
          <IconButton>
              <ColorLensOutlinedIcon />
          </IconButton>
          <IconButton>
              <EditOutlinedIcon />
          </IconButton>
          <IconButton onClick={handleDelete}>
              <DeleteOutlineIcon />
          </IconButton>
      </Toolbar>
    </Paper>
  );
};

export default Note;
