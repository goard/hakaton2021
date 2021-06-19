import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {},
  navHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#F3F6FA",
    margin: theme.spacing(0, -2),
  },
}));

const Header = (props) => {
  const { toggle } = props;
  const classes = useStyles();

  return (
    <Grid className={classes.navHead}>
      <IconButton>
        <ArrowLeftIcon />
      </IconButton>
      <Typography>Header</Typography>
      <IconButton onClick={toggle}>
        <MenuIcon />
      </IconButton>
    </Grid>
  );
};

export default Header;
