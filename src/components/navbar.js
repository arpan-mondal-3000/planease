import React from "react";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>PlanEase</h1>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/create">Create</a></li>
            </ul>
            <div className="register">
                <div className="login"><a href="/login">Login</a></div>
                <div className="signup"><a href="/signup">Signup</a></div>
            </div>
        </div>
     );
}
 
export default Navbar;