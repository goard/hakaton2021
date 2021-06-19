import { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    background:
      "linear-gradient(157deg, rgba(232,232,255,1) 0%, rgba(205,205,205,1) 93%)",
  },
}));

const Main = (props) => {
  const { children } = props;
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <Container maxWidth="sm" className={classes.root}>
        <Header toggle={toggleDrawer} />
        <SideBar open={openDrawer} toggle={toggleDrawer} />
        {children}
      </Container>
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
