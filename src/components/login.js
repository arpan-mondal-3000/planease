import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="loginpage">
      <div className="log">
        <div className="login-navbar">
          <h2>Login</h2>
        </div>
        <div className="login-container">
          <input type="Email" placeholder="Email"></input>
          <input type="Password" placeholder="Password"></input>
          <p>forgot password?</p>
          <p>
            don't have an account?<a href="/signup"> Signup</a>
          </p>
        </div>
        <div className="login-submit">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
