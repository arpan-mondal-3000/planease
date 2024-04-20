import React from "react";
import eventImage from "../assets/event.jpg";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="main-area">
        <div className="tagline">
          <div>Let's get this</div>
          <span className="colored-text">Planned</span>
          <div>
            with
            <span className="colored-text"> Ease</span>
          </div>
        </div>
        <img src={eventImage} alt="Event management" />
      </div>
    </div>
  );
};

export default Home;
