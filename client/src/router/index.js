import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Error404 from "../pages/Error404";
import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: (isLogin) => (isLogin ? Home : () => <Redirect to="/signin" />),
    exact: true,
  },
  {
    path: "/signin",
    component: (isLogin) => (!isLogin ? SignIn : () => <Redirect to="/" />),
  },
  {
    path: "/signup",
    component: (isLogin) => (!isLogin ? SignUp : () => <Redirect to="/" />),
  },
  {
    path: "*",
    component: Error404,
  },
];

export default routes;
