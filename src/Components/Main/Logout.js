import React, { useState } from "react";
import Parse from "parse"
import ProtectedRoute from "../../Services/ProtectedRoutes"
import LogoutService from "./../../Services/LogoutService"
import { Redirect} from "react-router-dom"

const Logout = () => {
  console.log(Parse.User.current());
  const [logout, setLogout] = useState(false);
  const [goBack, setGoBack] = useState(false);

  const logOutHandler = () => {
    setLogout(true);
  };

  const goBackHandler = () => {
    setGoBack(true);
  };

  return (
    <div>
      <div>
        <ProtectedRoute
          exact
          path="/Logout"
          flag = {Parse.User.current()}
          component = {Logout}
        />
      </div>

      <div>
        <h3>Are you Sure you want to log out?</h3>
        <form>
          <button type="submit" onClick={logOutHandler}>Log Out</button>
          <button type="submit" onClick={goBackHandler}>Back to Site</button>
        </form>
      </div>

      <div>
        { logout ? (
          <LogoutService />
        ) : null }
      </div>

      <div>
        { goBack ? (
          <Redirect to="/GameInput" />
        ) : null }
      </div>
    </div>
  )
}

export default Logout
