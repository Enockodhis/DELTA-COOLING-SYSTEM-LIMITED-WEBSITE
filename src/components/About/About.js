import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import industrialFurnace from "../../assets/industrialFurnace.webp";
import residentialFurnace from "../../assets/residentialFurnace.webp";
import commercialHVACunit from "../../assets/commercialHVACunit.webp";

const About = () => {
  return (
    <section id="About">
      <div className="aboutHeader">
        <h4>About Delta Cooling Systems Limited</h4>
      </div>
      <div className="contentInfo">
        <div className="contentAbout">
          <h5>"We cool everything under the sun"</h5>
          <p>
            Delta Cooling Systems Ltd is a leading mechanical engineering firm,
            recognized across East and Central Africa for supplying top-quality
            commercial refrigeration and air conditioning. We specialize in the
            design, supply, installation, and commissioning of air conditioning,
            mechanical ventilation systems, cold rooms, and general mechanical
            works.
          </p>
          <Link to="/services">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="contentImage">
          <img src={industrialFurnace} />
        </div>
      </div>
      <div className="contentInfo">
        <div className="contentImage">
          <img src={commercialHVACunit} />
        </div>
        <div className="contentAbout">
          <h5>Our Vision</h5>
          <p>
            To become one of the leading and most reliable mechanical
            contracting company in East and Central Africa.
          </p>
        </div>
      </div>
      <div className="contentInfo">
        <div className="contentAbout">
          <h5>Mission Statement</h5>
          <p>
            Guided by our vision, we will deliver high-quality, cost-effective
            projects on time, enhancing client satisfaction through continuous
            improvement in quality, service, and environmental practices.
          </p>
        </div>
        <div className="contentImage">
          <img src={residentialFurnace} />
        </div>
      </div>
    </section>
  );
};

export default About;
