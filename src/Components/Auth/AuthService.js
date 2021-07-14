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
    alert(`Error: ${error.message}`);
  });
};
