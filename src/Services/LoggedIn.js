import React from "react";
import { Redirect} from "react-router-dom";

// This Service redirects the user to the main landing page when they attept to
// visit one of the authentication pages after logging in.
const LoggedIn = ({ Component, flag, ...rest }) => {
  console.log(rest); // show rest.path in the console

  if (flag) {
    return (
      <div>
        <Redirect to={rest.path} />
      </div>
    )
  }
  else {
    {/*alert("You are already logged in")*/}
    return (
      <div>
        <Redirect to="/GameInput" />
      </div>
    )
  };
};

export default LoggedIn;
