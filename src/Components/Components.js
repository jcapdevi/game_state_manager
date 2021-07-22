import React from "react";
import GameInput from "./Main/GameInput"
import ViewSelector from "./Main/ViewSelector"
import UserInfo from "./Main/UserInfo"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import AuthModule from "./Auth/Auth";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import Logout from "./Main/Logout";


const Components = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* Auth */}
          <Route path="/auth" component={AuthModule} />
          <Route path="/register" component={AuthRegister} />
          <Route path="/login" component={AuthLogin} />
          {/* Main Site */}
          <Route path="/GameInput" component={GameInput} />
          <Route path="/ViewSelector" component={ViewSelector} />
          <Route path="/UserInfo" component={UserInfo} />
          <Route path="/Logout" component={Logout} />
          {/* Default */}
          <Redirect to="/auth" />
        </Switch>
      </Router>
    </div>
  );
};

export default Components;
