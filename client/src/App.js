import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import NoteEditor from "./components/NoteEditor";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Note from "./components/Note";
import NotesContainer from "./components/NotesContainer";

const useStyles = makeStyles((theme) => ({
  mainWindow: {
    width: "100%",
    paddingTop: "60px",
    paddingLeft: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "51px",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "64px",
    },

    [theme.breakpoints.down(309)]: {
      marginTop: "73px",
    },
  },
}));

function App() {

  const [openNoteEditor, setOpenNoteEditor] = useState(false)
  const classes = useStyles();

  return (
    <div className="App">
      <Navbar />
      <div className={classes.mainWindow}>
        <NoteEditor open={openNoteEditor} setOpen={setOpenNoteEditor}/>
        <SideMenu />
        <Button onClick={() => setOpenNoteEditor(true)} variant="contained">New Note</Button>
        <NotesContainer />
      </div>
    </div>
  );
}

export default App;
