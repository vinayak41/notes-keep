import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { v4 as uuid4 } from "uuid";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { addNote, updateNoteContent } from "../redux/actions/noteActions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    border: `3px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8),
    borderRadius: "5px",
    "& .ql-toolbar .ql-stroke": {
      fill: "none",
      stroke: theme.palette.text.primary
    },
    "& .ql-toolbar .ql-fill": {
      fill: theme.palette.text.primary,
      stroke: "none"
    },
    "& .ql-toolbar .ql-picker": {
      color: theme.palette.text.primary
    },
    "& .ql-picker-options": {
      backgroundColor: theme.palette.background.default
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    "&>*": {
      margin: "3px"
    },
    "& input": {
      width: "17rem",
      height: "2rem"
    }
  },
  btnsWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  saveBtn: {
    backgroundColor: "#42f554",
    margin: "6px"
  },
  cancelBtn: {
    backgroundColor: "#ff3849",
    margin: "6px"
  }
}));

export default function NoteEditor({ open, setOpen, note }) {
  const classes = useStyles();
  const [noteContent, setNoteContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    setNoteContent("");
    setOpen(false);
  };

  const handleChange = (html) => {
    setNoteContent(html);
  };

  const handleAddNote = () => {
    if (note) {
      dispatch(updateNoteContent(note.noteId, noteContent));
    } else {
      const noteId = uuid4();
      dispatch(addNote(noteContent, noteId));
    }
    handleClose();
  };

  useEffect(() => {
    if (open && note) {
      setNoteContent(note?.noteContent);
    }
  }, [open]);

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        on
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.root}>
            <ReactQuill
              ref={inputRef}
              value={noteContent}
              onChange={handleChange}
            />
            <div className={classes.btnsWrapper}>
              <Button
                variant="contained"
                className={classes.saveBtn}
                onClick={handleAddNote}
              >
                Save
              </Button>
              <Button
                variant="contained"
                className={classes.cancelBtn}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
