import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, Typography } from "@material-ui/core";
import { signInRequest } from "../redux/actions/userActions";
import Form from "../components/Form";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formFooter: {
    margin: "1rem",
    "&>a": {
      textDecoration: "none",
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.email.length && formData.password.length) {
      dispatch(signInRequest(formData));
    }
  };
  return (
    <div className={classes.root}>
      <div>
        <Form
          title={"SignIn"}
          button={{
            label: "SignIn",
            handleClick: () => {},
          }}
          inputs={[
            {
              label: "Email Id",
              name: "email",
              type: "email",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
            },
          ]}
          handleSubmit={handleSubmit}
          setFormData={setFormData}
        />
        <Typography align="center" className={classes.formFooter}>
          New user? <NavLink to="/signup">signup</NavLink>
        </Typography>
      </div>
    </div>
  );
};

export default SignIn;
