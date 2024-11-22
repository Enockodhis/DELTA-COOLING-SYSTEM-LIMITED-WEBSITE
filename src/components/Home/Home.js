import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="Home">
      <div className="home-contents">
        <h3>Welcome to Delta Cooling Systems Limited</h3>
        <p>Your trusted partner in HVAC solutions.</p>
        <Link to="/services">
          <button>View Our Services</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
