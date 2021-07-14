import React from "react";
import GameInput from "./Main/GameInput.js"
import ViewSelector from "./Main/ViewSelector.js"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import AuthModule from "./Auth/Auth";
import AuthRegister from "./Auth/AuthRegister";

const Components = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/auth" component={AuthModule} />
          <Route path="/register" component={AuthRegister} />
          <Redirect to="/auth" />
        </Switch>
      </Router>
      <GameInput />
      <ViewSelector />
    </div>
  );
};

export default Components;
