import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    border: `3px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8),
    borderRadius: "5px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    "&>*": {
      margin: "3px",
    },
    "& input": {
      width: "17rem",
      height: "2rem",
    },
  },
  btnsWrapper: { 
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  saveBtn: {
    backgroundColor: "#42f554",
    margin: "6px",
  },
  cancelBtn: {
    backgroundColor: "#ff3849",
    margin: "6px",
  },
}));

export default function NoteEditor({ open, setOpen }) {
  const classes = useStyles();
  const [noteContent, setNoteContent] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("note content : ", noteContent);
  }, [noteContent]);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (html) => {
    setNoteContent(html);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
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
              <Button variant="contained" className={classes.saveBtn} onClick={handleClose}>
                Save
              </Button>
              <Button variant="contained" className={classes.cancelBtn} onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
