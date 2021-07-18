import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton, makeStyles } from "@material-ui/core";
import appLogo from "../../assets/logo.png";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    "& > *": {
      margin: theme.spacing(3)
    }
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    flexGrow: "1",
  },
  appLogo: {
    width: "2rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar>
      <ToolBar className={classes.toolBar}>
        <img src={appLogo} alt="app-logo" className={classes.appLogo} />
        <Typography variant="h4" className={classes.title}>
          Note Keep
        </Typography>
        <IconButton><Brightness4Icon /></IconButton>
        <IconButton><AccountCircleIcon /></IconButton>
      </ToolBar>
    </AppBar>
  );
}
