import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import {useDispatch} from "react-redux"
import { changeNoteBgColor } from "../redux/actions/noteActions";

const noteBgColors = [
  {
    light: "#ffffff",
    dark: "#212024"
  },
  {
    light: "#F28B82",
    dark: "#5C2A28"
  },
  {
    light: "#FBBD05",
    dark: "#604B19"
  },
  {
    light: "#FFF475",
    dark: "#635D19"
  },
  {
    light: "#CCFF90",
    dark: "#345920"
  },
  {
    light: "#A6FEEB",
    dark: "#2D555E"
  },
  {
    light: "#CAF0F9",
    dark: "#1F3B5F"
  },
  {
    light: "#AFCAFA",
    dark: "#42275E"
  },
  {
    light: "#D6AFFB",
    dark: "#5B2344"
  },
  {
    light: "#FCCFE9",
    dark: "#5B2344"
  },
  {
    light: "#E6C9A8",
    dark: "#442F19"
  },
  {
    light: "#E8EBEC",
    dark: "#3C3E42"
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      width: "6.2rem",
      height: "4.7rem",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  typography: {
    padding: theme.spacing(2)
  },
  colorBtn: {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.grey[400]}`
  }
}));

export default function ColorMenu({ noteId, anchorEl, setAnchorEl }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (index) => {
    const color = noteBgColors[index].light
    dispatch(changeNoteBgColor(noteId, color))
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      className={classes.root}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
    >
      {noteBgColors.map((color, index) => (
        <button
          onClick={() => handleButtonClick(index)}
          key={color.light}
          className={classes.colorBtn}
          style={{ backgroundColor: `${noteBgColors[index].light}` }}
        />
      ))}
    </Popover>
  );
}
