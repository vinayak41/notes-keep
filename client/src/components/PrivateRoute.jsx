import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ Component, path, exact }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <Route
      exact={exact ?? false}
      to={path}
      render={(props) =>
        isAuthenticated ? <Component {...props}/> : <Redirect to="/signup" />
      }
    />
  );
};

export default PrivateRoute;
