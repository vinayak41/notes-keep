import React from "react";
import {useDispatch, useSelector} from "react-redux"
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton, makeStyles } from "@material-ui/core";
import appLogo from "../assets/logo.png";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoadingLine from "./LoadingLine";
import {changeTheme} from "../redux/actions/themeActions"

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: "1250"
  },
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
  const dispatch = useDispatch()
  const themeType = useSelector(state => state.theme.type)


  const handleThemeChange = () => {
    dispatch(changeTheme(themeType === "light" ? "dark" : "light"))
  }

  return (
    <AppBar className={classes.root}>
      <ToolBar className={classes.toolBar}>
        <img src={appLogo} alt="app-logo" className={classes.appLogo} />
        <Typography variant="h4" className={classes.title}>
          Note Keep
        </Typography>
        <IconButton onClick={handleThemeChange}><Brightness4Icon /></IconButton>
        <IconButton><AccountCircleIcon /></IconButton>
      </ToolBar>
      <LoadingLine />
    </AppBar>
  );
}
