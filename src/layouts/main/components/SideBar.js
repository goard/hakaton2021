import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useAuthHook } from "../../../hook/auth.hook";
import Avatar from "@material-ui/core/Avatar";
import { useAuthContext } from "../../../utils/AuthProvider";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "325px",
  },
  head: {
    background:
      "radial-gradient(at 0% 40%, #e8e8ff 30px, #cdcdcd 45%, #F3F6FA 85%)",
    borderRadius: "0 0 0 80px",
  },
  avatar: {
    width: theme.spacing(8.5),
    height: theme.spacing(8.5),
    marginTop: "60px",
    marginLeft: "40px",
    boxShadow: "0 3px 6px 0 #362e2e75",
    background:
      "linear-gradient(to bottom, #fc0b7b, #c2638c, #257896 62%, #104952)",
    backdropFilter: "blur(30px)",
  },
  avatarImg: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  textName: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#747474",
    marginTop: "14px",
    marginLeft: "40px",
  },
  textEmail: {
    fontSize: "14px",
    color: "#747474",
    margin: "7px 0 47px 40px",
  },
}));

const items = [
  {
    href: "/account",
    // icon: accountIcon,
    title: "Профиль",
  },
  {
    href: "/appointment",
    // icon: serviceIcon,
    title: "Запись к врачу",
  },
  {
    href: "/diagnose",
    // icon: scheduleIcon,
    title: "Самодиагностика",
  },
  {
    href: "/ask",
    // icon: clientIcon,
    title: "Только спросить",
  },
  {
    href: "/prescription",
    // icon: messageIcon,
    title: "Назначения врача",
  },
  {
    href: "/activity",
    // icon: visitIcon,
    title: "Физическая активность",
  },
];

const secondItems = [
  {
    href: "/feedback",
    // icon: feedbackIcon,
    title: "Обратная связь",
  },
  {
    href: "/",
    // icon: exitIcon,
    title: "Выход",
  },
];

const SideBar = (props) => {
  const { open, toggle } = props;
  const classes = useStyles();
  const { logout } = useAuthHook();
  const { currentUser } = useAuthContext();

  const clickHandler = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      open={open}
      onClose={toggle}
      onClick={toggle}
    >
      <Grid className={classes.head}>
        <Avatar className={classes.avatar}>
          <Avatar className={classes.avatarImg} src={currentUser.photoURL} />
        </Avatar>
        <Typography className={classes.textName}>
          {currentUser.displayName}
        </Typography>
        <Typography className={classes.textEmail}>
          {currentUser.email}
        </Typography>
      </Grid>
      <Grid style={{ height: "100vh" }}>
        <List style={{ marginLeft: "50px" }}>
          {items.map((item, i) => {
            return (
              <ListItem button key={i} component={NavLink} to={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.title}
                  style={{ fontSize: "18px", color: "#747474" }}
                />
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid>
        <List style={{ marginLeft: "50px" }}>
          {secondItems.map((item, i) => {
            return (
              <ListItem
                button
                onClick={i === secondItems.length - 1 ? clickHandler : null}
                key={i}
                component={NavLink}
                to={item.href}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.title}
                  style={{ fontSize: "18px", color: "#747474" }}
                />
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Drawer>
  );
};

export default SideBar;
