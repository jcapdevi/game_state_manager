import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom"
import { createUser } from "./AuthService";
import AuthForm from "./AuthForm";
import Parse from "parse"
import LoggedIn from "../../Services/LoggedIn"

const AuthRegister = () => {
  const [newUser, setNewUser] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [success, setSuccess] = useState(false);



  // useEffect will run when changes are made to the state variable
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(`${userCreated.get('firstName')}, you have successfully registered!`)
          setSuccess(true)
        }
        setAdd(false)
      });
    }
  },[newUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);
    setNewUser( {...newUser, [name]: newValue} );
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('submitted: ', e.target);
    setAdd(true);
  }

  return (
    <div>
      <div>
        <LoggedIn
          exact
          path="/register"
          flag = {!Parse.User.current()}
          component = {AuthRegister}
        />
      </div>
      <AuthForm
      user={newUser}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
      mode="register"/>

      { success ? (
        <Redirect to="/GameInput"></Redirect>
      ) : null }
    </div>
  );
};

export default AuthRegister;
