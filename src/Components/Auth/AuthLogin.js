import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom"
import { loginUser } from "./AuthService";
import AuthForm from "./AuthForm";
import Parse from "parse"
import LoggedIn from "../../Services/LoggedIn"

// Componenet for logging in with existing user credentials

const AuthLogin = () => {
  const [userCreds, setUserCreds] = useState ({
    email:"",
    password:""
  });

  const [go, setGo] = useState(false);
  const [success, setSuccess] = useState(false);

  // Attempts to log user in when go flag is set and user credentials have been entered
  useEffect(() => {
    if (userCreds && go) {
      loginUser(userCreds).then((user) => {
        if (user) {
          alert(`${user.get('firstName')}, you have successfully logged in!`)
          setSuccess(true)
        }
        setGo(false)
      });
    }
  },[userCreds, go]);

  //  Updates user credentials to match form
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);
    setUserCreds( {...userCreds, [name]: newValue} );
  };

  // Sets go flag to start logging in when form is submitted
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submitted: ', e.target, userCreds);
    setGo(true);
  }

  return (
    <div>
      <div>
        <LoggedIn
          exact
          path="/login"
          flag = {!Parse.User.current()}
          component = {AuthLogin}
        />
      </div>
      <AuthForm
      user={userCreds}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
      mode="login"/>

      { success ? (
        <Redirect to="/GameInput"></Redirect>
      ) : null }
    </div>
  )

}

export default AuthLogin;
