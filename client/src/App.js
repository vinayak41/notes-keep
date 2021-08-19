import Navbar from "./components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/actions/userActions";
import SnackBar from "./components/SnackBar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Error404 from "./pages/Error404";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { changeTheme } from "./redux/actions/themeActions";

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
    "&>div": {
      width: "100vw",
      minHeight: "calc(100vh - 60px)",
      [theme.breakpoints.up("sm")]: {
        minHeight: "calc(100vh - 64px)",
      },
    },
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      dispatch(getUser(token));
    }
    const themeType = localStorage.getItem("theme");
    if(themeType) {
      dispatch(changeTheme(themeType))
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className={classes.body}>
        <Switch>
          <PrivateRoute path={"/"} Component={() => <Redirect to="/home" />} exact />
          <PrivateRoute path={"/home"} Component={Home} />
          <PublicRoute path="/signin" Component={SignIn} restricted />
          <PublicRoute path="/signup" Component={SignUp} restricted />
          <Route component={Error404} />
        </Switch>
      </div>
      <SnackBar />
    </div>
  );
}

export default App;
