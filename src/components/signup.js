import React, { useRef } from "react";
import "./login.css";
// import { auth } from "../config/firebase.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.js";

const Signup = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account!");
    }
    setLoading(false);
  }

  // const signIn = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            ref={emailRef}
          ></input>
          <input
            type="Password"
            placeholder="Password"
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
            ref={passwordRef}
          ></input>
          <p>
            already have an account?<a href="/login"> Login</a>
          </p>
        </div>
        <div className="login-submit">
          <button disabled={loading} onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {<p>{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
