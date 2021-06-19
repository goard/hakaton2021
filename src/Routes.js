import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "./utils/RouteWithLayout";
import Login from "./views/Login";
import Register from "./views/Register";
import Public from "./views/Public";
import Minimal from "./layouts/minimal/Minimal";
import Main from "./layouts/main/Main";
import Home from "./views/Home";
import { useAuthContext } from "./utils/AuthProvider";

const Routes = () => {
  const { currentUser, ready } = useAuthContext();
  if (!ready) {
    return <h1>loader</h1>;
  }

  if (!!currentUser) {
    return (
      <Switch>
        <RouteWithLayout exact path="/home" component={Home} layout={Main} />
        <Redirect exact to="/home" />
      </Switch>
    );
  }
  return (
    <Switch>
      <RouteWithLayout exact path="/login" component={Login} layout={Minimal} />
      <RouteWithLayout
        exact
        path="/register"
        component={Register}
        layout={Minimal}
      />
      <RouteWithLayout exact patch="/" component={Public} layout={Minimal} />
      <Redirect exact to="/" />
    </Switch>
  );
};

export default Routes;
