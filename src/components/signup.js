import React from "react";
import "./login.css";
import { auth } from "../config/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {};
  return (
    <div className="loginpage">
      <div className="log">
        <div className="login-navbar">
          <h2>Signup</h2>
        </div>
        <div className="login-container">
          <input
            type="Email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            type="Password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <p>
            already have an account?<a href="/login"> Login</a>
          </p>
        </div>
        <div className="login-submit">
          <button onClick={signIn}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
