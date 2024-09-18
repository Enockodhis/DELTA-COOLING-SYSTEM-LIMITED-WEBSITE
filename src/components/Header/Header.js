import React from "react";
import "./Header.css";
import deltaVideo from "../../assets/deltavideo.mp4";
import backgroundImage from "../../assets/backgroundImage.webp";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <section id="Header">
      <video autoPlay loop muted className="background-video">
        <source src={deltaVideo} type="video/mp4" />
      </video>
      <div className="header-contents">
        <h3>Welcome to Delta Cooling Systems Limited</h3>
        <p>Your trusted partner in HVAC solutions.</p>
        <Link>
          <button
            onClick={() => {
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Our Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Header;
