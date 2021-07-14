import React, { useEffect, useState } from "react";
import { loginUser } from "./AuthService";
import LoginForm from "./LoginForm";

const AuthLogin = () => {
  const [userCreds, setUserCreds] = useState ({
    email:"",
    password:""
  });

  const [go, setGo] = useState(false);

  // Attempts to log user in when go flag is set and user credentials have been entered
  useEffect(() => {
    if (userCreds && go) {
      loginUser(userCreds).then((user) => {
        if (user) {
          alert(`${user.get('firstName')}, you have successfully logged in!`)
        }
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
    console.log('submitted: ', e.target);
    setGo(true);
  }

  return (
    <div>
      <LoginForm
      user={userCreds}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}/>
    </div>
  )

}

export default AuthLogin;
