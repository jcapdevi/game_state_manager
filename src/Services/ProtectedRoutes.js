import React from "react";
import { Redirect} from "react-router-dom";

// This service redirects to auth pages if not authenticated
const ProtectedRoute = ({ Component, flag, ...rest }) => {
  console.log(rest); // show rest.path in the console

  console.log("Protecting: Flag is ", flag)

  // Alert Version: sends alert when in the wrong place
  // Bug: Alert is sent twice
  //
  // if (flag) {
  //   return (
  //     <div>
  //       <Redirect to={rest.path} />
  //     </div>
  //   )
  // }
  // else {
  //   {/*alert("Not Authorized: Please Register or Log In")*/}
  //   return (
  //     <div>
  //       <Redirect to="/auth" />
  //     </div>
  //   )
  // };

  return (
    <div>
      { flag ? (
        <Redirect to={rest.path} />
      ) : (
        <Redirect to="/auth" />
      )}
    </div>
  )
};

export default ProtectedRoute;
