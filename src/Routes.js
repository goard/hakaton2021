import { Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "./utils/RouteWithLayout";
import Login from "./views/Login";
import Register from "./views/Register";
import Public from "./views/Public";
import Minimal from "./layouts/minimal/Minimal";
import Home from "./views/Home";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout exact path="/login" component={Login} layout={Minimal} />
      <RouteWithLayout
        exact
        path="/register"
        component={Register}
        layout={Minimal}
      />
      <RouteWithLayout exact path="/home" component={Home} layout={Minimal} />
      <RouteWithLayout exact patch="/" component={Public} layout={Minimal} />
      {/* <Redirect exact to="/" /> */}
    </Switch>
  );
};

export default Routes;
