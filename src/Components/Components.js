import React from "react";
import GameInput from "./Main/GameInput"
import ViewSelector from "./Main/ViewSelector"
import UserInfo from "./Main/UserInfo"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import AuthModule from "./Auth/Auth";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";


const Components = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/auth" component={AuthModule} />
          <Route path="/register" component={AuthRegister} />
          <Route path="/login" component={AuthLogin} />
          <Route path="/GameInput" component={GameInput} />
          <Route path="/ViewSelector" component={ViewSelector} />
          <Route path="/UserInfo" component={UserInfo} />
          <Redirect to="/auth" />
        </Switch>
      </Router>
    </div>
  );
};

export default Components;
