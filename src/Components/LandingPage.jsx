import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const history = useNavigate();
  const clickHandler = () => {
    history("/header");
  };
  return (
    <div className="landing-page">
      <div className="container">
        <h1 className="title">Event Management</h1>
        <p className="subtitle">Plan and organize your events seamlessly</p>
        <button className="cta-button" onClick={clickHandler}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
