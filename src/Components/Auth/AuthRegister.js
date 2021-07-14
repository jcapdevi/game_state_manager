import React, { useEffect, useState } from "react";
import { createUser } from "./AuthService";
import RegisterForm from "./RegisterForm";

const AuthRegister = () => {
  const [newUser, setNewUser] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // useEffect will run when changes are made to the state variable
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(`${userCreated.get('firstName')}, you have successfully registered!`)
        }
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
      <RegisterForm
      user={newUser}
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}/>
    </div>
  );
};

export default AuthRegister;
