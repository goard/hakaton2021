import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Typography align="center" variant="h5">
          Вход
        </Typography>
        <form onSubmit={submitHandler}>
          <TextField
            name="email"
            onChange={changeHandler}
            value={form.email}
            variant="outlined"
            required
            fullWidth
            margin="normal"
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
            margin="normal"
            type="password"
            label="Пароль"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Войти
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default Login;
