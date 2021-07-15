const AuthForm = ({ user, onChange, onSubmit, mode}) => {
  if (mode == "login") {
    return (
      <div>
        <form onSubmit={onSubmit} autoComplete="off">
          <div>
            <label>Email</label>
            <br />
            <input type="email" id="email-input" value={user.email} onChange={onChange} name="email" required />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input type="password" id="password-input" value={user.password} onChange={onChange} name="password" required />
          </div>
          <br />
          <div>
            <button type="submit" onSubmit={onSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
  else if (mode == "register") {
    return (
      <div>
        <form onSubmit={onSubmit} autoComplete="off">
          <div>
            <label>First Name</label>
            <br />
            <input type="text" id="first-name-input" value={user.firstName} onChange={onChange} name="firstName" required />
          </div>
          <div>
            <label>last Name</label>
            <br />
            <input type="text" id="last-name-input" value={user.lastName} onChange={onChange} name="lastName" required />
          </div>
          <div>
            <label>Email</label>
            <br />
            <input type="email" id="email-input" value={user.email} onChange={onChange} name="email" required />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input type="password" id="password-input" value={user.password} onChange={onChange} name="password" required />
          </div>
          <br />
          <div>
            <button type="submit" onSubmit={onSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
  else {
    console.log("Unreachable path error: Auth path")
  }
};


export default AuthForm;
