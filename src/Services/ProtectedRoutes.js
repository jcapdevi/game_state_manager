import React from "react";
import { Redirect, useParams } from "react-router-dom";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  console.log(rest); // show rest.path in the console
  // you could redirect back to /auth if the flag is not true

  user = useParams();

  if (flag) {
    return (
      <div>
        <Redirect to={rest.path} />
      </div>
    )
  }
  else {
    alert("Not Authorized: Please Register or Log In")
    return (
      <div>
        <Redirect to="/auth" />
      </div>
    )
  };
};

export default ProtectedRoute;
