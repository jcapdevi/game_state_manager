import React from "react";
import { Redirect} from "react-router-dom";

// This service redirects to auth pages if not authenticated
const ProtectedRoute = ({ Component, flag, ...rest }) => {
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
