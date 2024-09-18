import React from "react";
import "./Home.css";
import deltaVideo from "../../assets/deltavideo.mp4";
import { Link } from "react-router-dom";
// import backgroundImage from '../../assets/backgroundImage.webp';

const Home = () => {
  return (
    <section id="Home">
      {/* <video autoPlay loop muted className="background-video">
        <source src={deltaVideo} type="video/mp4" />
      </video> */}
      <video src={deltaVideo} type="video/mp4" autoPlay loop muted />
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
