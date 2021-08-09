import SideMenu from "../components/SideMenu";
import NoteEditor from "../components/NoteEditor"
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useState } from "react";
import NotesContainer from "../components/NotesContainer";
import CreateIcon from '@material-ui/icons/Create';
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  mainWindow: {
    width: "100%",
    paddingLeft: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "51px",
    },
  },
  newNoteBtn: {
    margin: "2rem",
    padding: "1rem 1rem",
    "&>span>svg": {
      marginRight: "15px"
    }
  }
}));

function App() {
  const [openNoteEditor, setOpenNoteEditor] = useState(false);
  const {notes} = useSelector( state => state.note)
  const classes = useStyles();

  return (
    <div className={classes.mainWindow}>
      <NoteEditor open={openNoteEditor} setOpen={setOpenNoteEditor} />
      <SideMenu />
      <Button onClick={() => setOpenNoteEditor(true)} variant="contained" className={classes.newNoteBtn}>
        <CreateIcon />
        Create New Note
      </Button>
      <NotesContainer notes={notes} />
    </div>
  );
}

export default App;
