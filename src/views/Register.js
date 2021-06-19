import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = async(event) => {
    event.preventDefault();

  }

  return (
    <>
      <Paper className={classes.paper}>
        <Typography align="center" variant="h5">
          Регистрация
        </Typography>
        <form onSubmit={submitHandler}>
          <TextField
            name="firstName"
            onChange={changeHandler}
            value={form.firstName}
            variant="outlined"
            required
            fullWidth
            margin="dense"
            type="text"
            label="Имя"
          />
          <TextField
            name="lastName"
            onChange={changeHandler}
            value={form.lastName}
            variant="outlined"
            required
            fullWidth
            margin="dense"
            type="text"
            label="Фамилия"
          />
          <TextField
            name="email"
            onChange={changeHandler}
            value={form.email}
            variant="outlined"
            required
            fullWidth
            margin="dense"
            type="email"
            label="Email"
          />
          <TextField
            name="password"
            onChange={changeHandler}
            value={form.password}
            variant="outlined"
            required
            fullWidth
            margin="dense"
            type="password"
            label="Пароль"
          />
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label={
              <Typography variant="body2">
                Согласия на обработку персональных данных
              </Typography>
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Зарегистрироваться
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Register;
