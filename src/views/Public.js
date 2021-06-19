import { Typography } from "@material-ui/core";
import { useHistory, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3.2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Public = () => {
  const classes = useStyles();
  const history = useHistory();

  const clickHandler = () => {
    history.push("/login");
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Typography align="center">Контроль здоровья</Typography>
        <Button
          style={{
            backgroundImage: "url(/images/gos_logo_mobile.svg)",
            backgroundSize: "auto auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "3rem",
            marginTop: "1rem",
          }}
          fullWidth
          variant="outlined"
        ></Button>
        <Button
          className={classes.submit}
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={clickHandler}
        >
          Вход
        </Button>
        <Grid container justify="center">
          <Typography
            component={NavLink}
            to="/register"
            style={{
              fontSize: "0.75rem",
              color: "#9f9f9f",
              marginTop: "0.563rem",
            }}
          >
            Регистрация
          </Typography>
        </Grid>
      </Paper>
    </>
  );
};

export default Public;
