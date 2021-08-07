import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, Typography } from "@material-ui/core";
import { signUpRequest } from "../redux/actions/userActions";
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
      textDecoration: "none"
    }
  },
}));

const SignUp = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.email.length && formData.password.length) {
      dispatch(signUpRequest(formData, props.history));
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <Form
          title={"SignUp"}
          button={{
            label: "SignUp",
            handleClick: () => {},
          }}
          inputs={[
            {
              label: "Email Id",
              type: "text",
              name: "email",
              handleChange: () => {},
            },
            {
              label: "Password",
              type: "password",
              name: "password",
              handleChange: () => {},
            },
          ]}
          handleSubmit={handleSubmit}
          setFormData={setFormData}
        />
        <Typography align="center" className={classes.formFooter}>
          Already have an account? <NavLink to="/signin">signin</NavLink>
        </Typography>
      </div>
    </div>
  );
};

export default SignUp;
