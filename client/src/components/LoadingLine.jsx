import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    },
    "&>.MuiLinearProgress-colorPrimary": {
      backgroundColor: "#cdffc8",
      height: "6px"
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#3bff52"
    }
  }
}));

const LoadingLine = () => {
  const classes = useStyles();
  const isUserLoading = useSelector((state) => state.user.isLoading);
  const loading = isUserLoading;

  return (
    <div
      className={classes.root}
      style={{ display: !loading ? "none" : "block" }}
    >
      <LinearProgress />
    </div>
  );
};

export default LoadingLine;
