import { Link } from "react-router-dom"
import Parse from "parse"
import LoggedIn from "../../Services/LoggedIn"

// Landing page

const AuthModule = () => {
  return (
    <div>
      <div>
        <LoggedIn
          exact
          path="/auth"
          flag = {!Parse.User.current()}
          component = {AuthModule}
        />
      </div>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <br />
      <br />
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default AuthModule;
