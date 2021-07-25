import React from "react";
import Form from "../components/Form";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
}));

const SignIn = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className={classes.root}>
      <div>
        <Form
          title={"SignIn"}
          button={{
            label: "SignIn",
            handleClick: () => {},
          }}
          inputs={
            [
              {
                label: "Email Id",
                type: "text",
                handleChange: () => {},
              },
              {
                label: "Password",
                type: "password",
                handleChange: () => {},
              },
              {
                label: "Confirm Password",
                type: "password",
                handleChange: () => {},
              },
            ]
          }
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SignIn;
