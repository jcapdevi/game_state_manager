import Parse from "parse";

export const createUser = (newUser) => {
  const user = new Parse.User();
  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("email", newUser.email);
  user.set("password", newUser.password);

  console.log('User: ', user);

  return user.signUp().then((newUserSaved) => {
    return newUserSaved;
  })
  .catch((error) => {
    alert(`Error while creating user: ${error.message}`);
  });
};

export const loginUser = (userCreds) => {
  console.log("Attempting to log in: ", userCreds);

  return Parse.User.logIn(userCreds.email, userCreds.password).then((user) => {
    return user;
  })
  .catch((error) => {
    alert(`Error while logging in: ${error.message}`);
  });
}
