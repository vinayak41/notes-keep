import { Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

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
  }
}));

const Note = ({noteContent}) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.note}>
      {noteContent || <h3>Enpty 🗒 </h3>}
      <Toolbar variant="dense" className={classes.toolbar}>
          <IconButton>
              <ColorLensOutlinedIcon />
          </IconButton>
          <IconButton>
              <EditOutlinedIcon />
          </IconButton>
          <IconButton>
              <DeleteOutlineIcon />
          </IconButton>
      </Toolbar>
    </Paper>
  );
};

export default Note;
