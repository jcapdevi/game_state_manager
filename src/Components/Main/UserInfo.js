import React from "react";
import { Link } from "react-router-dom"
import ProtectedRoute from "../../Services/ProtectedRoutes"
import Parse from "parse"

const UserInfo = () => {
  console.log(Parse.User.current())
  return (
    <div>
      <div>
        <ProtectedRoute
          exact
          path="/UserInfo"
          flag = {Parse.User.current()}
          component = {UserInfo}
        />
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default UserInfo;
