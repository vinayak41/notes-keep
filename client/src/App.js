import Navbar from "./components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <div className="App">
      <Navbar />
      <div className={classes.body}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component(isLogin)}
              exact={route.exact ? true : false}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default App;
