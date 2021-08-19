import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
    padding: "1rem 1rem 2rem",
    "& label.Mui-focused": {
      color: theme.palette.text.primary,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: 'grey',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey',
      },
      "& .MuiInputLabel-root": {
        color: theme.palette.text.primary,
      },
    },
  },
  inputsWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem",
  },
  inputField: {
    width: "18rem",
    margin: "0.5rem"
  }
}));

const Form = ({title, button, inputs, handleSubmit, setFormData}) => {
  const classes = useStyles();

  const handleChange = (event) =>{
    setFormData( prevstate => ({ ...prevstate, [event.target.name]: event.target.value}))
  }
  
  return (
    <Paper component="form" onSubmit={handleSubmit} elevation={5} className={classes.root}>
      <h1>{title}</h1>
      <div className={classes.inputsWrapper}>
        {inputs.map(({ label, name, type }) => (
          <TextField
            className={classes.inputField}
            key={label}
            type={type}
            name={name}
            label={label}
            onChange={handleChange}
            variant="outlined"
          />
        ))}
      </div>
      <Button variant="contained" type="submit">{button.label}</Button>
    </Paper>
  );
};

export default Form;
