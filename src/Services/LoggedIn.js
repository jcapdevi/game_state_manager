import React from "react";
import { Redirect} from "react-router-dom";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
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
    alert("You are already logged in")
    return (
      <div>
        <Redirect to="/GameInput" />
      </div>
    )
  };
};

export default LoggedIn;
