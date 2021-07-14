const LoginForm = ({ user, onChange, onSubmit }) => {
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
};

export default LoginForm;
