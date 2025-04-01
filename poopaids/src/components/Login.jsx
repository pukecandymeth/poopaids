import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div id="login">
      <h2>Login Page</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
