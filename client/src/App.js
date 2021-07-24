import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import NoteEditor from "./components/NoteEditor";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Note from "./components/Note";
import NotesContainer from "./components/NotesContainer";
import Home from "./pages/Home"
import { Route, Switch } from "react-router-dom";
import routes from "./router";

const useStyles = makeStyles((theme) => ({
  body: {
    width: "100%",
    paddingTop: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "64px",
    },
    [theme.breakpoints.down(309)]: {
      marginTop: "73px",
    },
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Navbar />
      <div className={classes.body}>
        <Switch>
          {routes.map( route => <Route key={route.path} path={route.path} component={route.component} exact={route.exact ? true : false} /> )}
        </Switch>
      </div>
    </div>
  );
}

export default App;
