import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ Component, path, exact, restricted }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log("res", restricted);
  console.log("ex", exact);
  return (
    <Route
    exact={exact ?? false}
      to={path}
      render={() =>
        isAuthenticated && restricted ? <Redirect to="/home" /> : <Component />
      }
    />
  );
};

export default PublicRoute;
