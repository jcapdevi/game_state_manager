import React from "react"
import { Link } from "react-router-dom"
import ProtectedRoute from "../../Services/ProtectedRoutes"
import Parse from "parse"

// User Info Page
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

      {/* Get and Display User Info from Current User */}
      <div>
        <h1>User Info</h1>
        <hr />
        <p>Name: {Parse.User.current().attributes.firstName} {Parse.User.current().attributes.lastName}</p>
        <p>Email: {Parse.User.current().attributes.email}</p>
      </div>

      <div>
        <hr />
        <h3>Navigation:</h3>
        <Link to="/GameInput">
          <p>Save a Game</p>
        </Link>
        <Link to="/ViewSelector">
          <p>View Saved Games</p>
        </Link>
        <Link to="/Logout">
          <p>Log Out</p>
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
