import SideMenu from "../components/SideMenu";
import NoteEditor from "../components/NoteEditor";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useState } from "react";
import NotesContainer from "../components/NotesContainer";
import CreateIcon from "@material-ui/icons/Create";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainWindow: {
    width: "100%",
    paddingLeft: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "51px"
    }
  },
  newNoteBtn: {
    margin: "2rem",
    padding: "1rem 1rem",
    "&>span>svg": {
      marginRight: "15px"
    }
  }
}));

function Home(props) {
  const [openNoteEditor, setOpenNoteEditor] = useState(false);
  const { notes } = useSelector((state) => state.note);
  const classes = useStyles();

  console.log(props);
  console.log(`${props.location.pathname}/bin`);

  return (
    <div className={classes.mainWindow}>
      <NoteEditor open={openNoteEditor} setOpen={setOpenNoteEditor} />
      <SideMenu />
      <Button
        onClick={() => setOpenNoteEditor(true)}
        variant="contained"
        className={classes.newNoteBtn}
      >
        <CreateIcon />
        Create New Note
      </Button>
      <Switch>
        <Route path="/home" exact>
          <NotesContainer notes={notes.filter((note) => !note.isDeleted)} />
        </Route>
        <Route path="/home/bin">
          <NotesContainer notes={notes.filter((note) => note.isDeleted)} />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
