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

const SignUp = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className={classes.root}>
      <div>
        <Form
          title={"SignUp"}
          button={{
            label: "SignUp",
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
            ]
          }
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SignUp;
