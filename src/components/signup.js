import React from "react";
import './login.css';

const Signup = () => {
    return ( 
        <div className="loginpage">
        <div className="log">
          <div className="login-navbar">
              <h2>Signup</h2>
          </div>
          <div className="login-container">
              <input type='text'placeholder="Name"></input>
              <input type='Email'placeholder="Email"></input>
              <input type='Password'placeholder="Password"></input>
              <p><a href="./login">already have an account? Login</a></p>
      
          </div>
          <div className="login-submit">
             <button>Submit</button>
          </div>
        </div>
                
              </div>
     );
}
 
export default Signup;