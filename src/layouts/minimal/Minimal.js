import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { RostelecomSvg } from "./../../theme/icons";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    background:
      "linear-gradient(157deg, rgba(232,232,255,1) 0%, rgba(205,205,205,1) 93%)",
  },
}));

const Minimal = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container>{RostelecomSvg}</Grid>

      {children}
    </Container>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
};

export default Minimal;
