import React from "react";

function LoginPage({ onLogin }) {
  const [user, setUser] = React.useState({
    userEmail: "",
    password: "",
  });

  function onEmailChange(event) {
    setUser((prevState) => ({
      ...prevState,
      userEmail: event.target.value,
    }));
  }

  function onPasswordChange(event) {
    setUser((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  }

  function onSubmitHandler(event) {
    console.log(user);
    event.preventDefault();
    onLogin(user);
  }

  return (
    <div className="login-page-temp">
      <form className="input-login" onSubmit={onSubmitHandler}>
        <label>email: testUser1@test.com</label>
        <label>pw: test1234</label>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={onPasswordChange} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
