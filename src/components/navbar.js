import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>PlanEase</h1>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/explore">Explore</a>
        </li>
        <li>
          <a href="/create">Create</a>
        </li>
      </ul>
      <div className="register">
        <a href="/login">
          <div className="login">Login</div>
        </a>
        <a href="/signup">
          <div className="signup">Signup</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
