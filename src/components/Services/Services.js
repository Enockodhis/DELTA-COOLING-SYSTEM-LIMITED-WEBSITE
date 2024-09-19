import React from "react";
import "./Services.css";
import { FaSnowflake, FaWind, FaFan, FaWater } from "react-icons/fa";
import outdoorunit from "../../assets/outdoorunit.png";
import ductwork from "../../assets/ductwork.webp";
import splitoutdoorunit from "../../assets/splitoutdoor.png";
import residentialAc from "../../assets/residentialAc.webp";
import hvacdiffuser from "../../assets/hvacdiffuser.webp";
import {
  FaTools,
  FaCogs,
  FaCheckCircle,
  FaSmile,
  FaMoneyBillWave,
} from "react-icons/fa";
import Bosch from "../../assets/bosch.png";
import SolarPalau from "../../assets/solarpalau.png";
import Bitzer from "../../assets/bitzer.png";
import Daikin from "../../assets/daikin.png";
import Airdale from "../../assets/airdale.png";
import Toshiba from "../../assets/toshiba.png";

const Services = () => {
  return (
    <section id="services">
      {/* ---Services Title--- */}
      <div className="services-title">
        <h6>REFRIGERATION AND AIR CONDITIONING SERVICES</h6>
        <h7>SUMMARY</h7>
        <p>
          We recognize that your building is one of your company’s most valuable
          assets and a key factor in your growth and success. With our HVAC
          expertise at Delta Cooling Systems Limited, we offer Integrated
          Service Solutions that can turn your building into your most reliable
          asset by creating a perfect environment with high-quality air, driving
          both your employees and customers forward. Additionally, our
          cutting-edge energy-saving solutions and comprehensive maintenance
          plans help you manage maintenance and operational expenses
          efficiently. Whether it's high-rises, hotels, data centers, plants,
          schools, or hospitals, we provide top-tier support to a wide variety
          of commercial and industrial facilities globally. Trust Delta Cooling
          Systems Limited for advanced technology, flexibility, and
          dependability.
        </p>
      </div>
      {/* ----Range of Business Activities--- */}
      <div className="business-container">
        <h2>Business Activity Range</h2>
        <p>
          Since its establishment, Delta Cooling Systems Limited has specialized
          in various areas, including:
        </p>

        <div className="card">
          <FaSnowflake className="icon" />
          <div>
            <h3 className="cardTitle">Commercial Refrigeration</h3>
            <p>Cold Rooms, Defreezers, etc.</p>
          </div>
        </div>

        <div className="card">
          <FaWind className="icon" />
          <div>
            <h3 className="cardTitle">Air Conditioning</h3>
            <p>
              Chilled Water Systems, Water Source Systems, VRV/VRF Systems,
              Precession Air Conditioning Systems, Split Air Conditioning
              Systems.
            </p>
          </div>
        </div>

        <div className="card">
          <FaFan className="icon" />
          <div>
            <h3 className="cardTitle">Mechanical Ventilation Systems</h3>
            <p>
              Duct Works, Kitchen Hoods, Extractor Fans, Centrifugal Fans, Axial
              Fans, etc.
            </p>
          </div>
        </div>

        <div className="card">
          <FaWater className="icon" />
          <div>
            <h3 className="cardTitle">Plumbing Services</h3>
          </div>
        </div>
      </div>
      {/* ---Detailed Services Info--- */}
      <div className="servicesInfo">
        <div className="servicesAbout">
          <h5>INSTALLATION OF OUTDOOR UNITS</h5>
          <p>
            At Delta Cooling Systems Ltd we are dedicated to providing top-tier
            installation services for outdoor units, including air conditioning
            systems, heating systems, and ventilation units. With years of
            industry experience, our expert team ensures that every installation
            is performed with precision and efficiency, tailored to meet the
            unique needs of your property. We work with both residential and
            commercial clients, offering solutions that enhance comfort, energy
            efficiency, and overall system performance.
          </p>
        </div>
        <div className="servicesImage">
          <img src={outdoorunit} alt="outdoorunit" />
        </div>
      </div>
      <div className="servicesInfo">
        <div className="servicesImage">
          <img src={ductwork} alt="ductwork" />
        </div>
        <div className="servicesAbout">
          <h5>AIR HANDLERS AND DUCTWORK</h5>
          <p>
            We are trusted expert in the installation of air handlers and
            ductwork systems, offering comprehensive HVAC solutions for
            residential, commercial, and industrial properties. Our team of
            highly skilled technicians is dedicated to providing precision
            installation services that ensure optimal airflow, temperature
            control, and energy efficiency throughout your space.
          </p>
        </div>
      </div>
      <div className="servicesInfo">
        <div className="servicesAbout">
          <h5>SPLIT OUTDOOR UNITS</h5>
          <p>
            We specializes in the professional installation of split outdoor
            units, providing efficient and reliable climate control solutions
            for both residential and commercial properties. With a focus on
            quality and precision, our skilled technicians ensure that every
            installation is tailored to meet the specific requirements of your
            space, enhancing comfort and energy efficiency.
          </p>
        </div>
        <div className="servicesImage">
          <img src={splitoutdoorunit} alt="splitoutdoorunit" />
        </div>
      </div>
      <div className="servicesInfo">
        <div className="servicesImage">
          <img src={residentialAc} alt="residentialAc" />
        </div>
        <div className="servicesAbout">
          <h5>RESIDENTIAL AC</h5>
          <p>
            Delta Cooling Systems Ltd is a trusted provider of residential air
            conditioning installation services, committed to delivering comfort
            and efficiency to homes. With a deep understanding of the unique
            needs of residential spaces, our expert technicians ensure that each
            installation is performed with the highest level of precision, using
            the latest technology to keep your home cool and comfortable.
          </p>
        </div>
      </div>
      <div className="servicesInfo">
        <div className="servicesAbout">
          <h5>ROUND DIFFUSER</h5>
          <p>
            Delta Cooling Systems Limited is a premier provider of installation
            services for round diffusers, offering tailored solutions to enhance
            air distribution and comfort in residential, commercial, and
            industrial spaces. Our experienced technicians are experts in
            ensuring that round diffusers are installed correctly and
            efficiently, optimizing airflow and improving indoor air quality
            throughout your property.
          </p>
        </div>
        <div className="servicesImage">
          <img src={hvacdiffuser} alt="hvacdiffuser" />
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="why-choose-us-container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <div className="icon-container">
              <FaTools />
            </div>
            <h3 className="reason-title">Expert Technicians</h3>
            <p className="reason-description">
              Our team is highly trained and certified, with extensive
              experience across a broad range of HVAC installations.
            </p>
          </div>
          <div className="reason-card">
            <div className="icon-container">
              <FaCogs />
            </div>
            <h3 className="reason-title">Comprehensive Solutions</h3>
            <p className="reason-description">
              We offer end-to-end installation services, from outdoor units to
              complex commercial systems, ensuring a seamless and efficient
              process.
            </p>
          </div>

          <div className="reason-card">
            <div className="icon-container">
              <FaCheckCircle />
            </div>
            <h3 className="reason-title">Commitment to Quality</h3>
            <p className="reason-description">
              We use only the highest quality materials and the latest
              technology to ensure long-lasting performance and energy
              efficiency.
            </p>
          </div>

          <div className="reason-card">
            <div className="icon-container">
              <FaSmile />
            </div>
            <h3 className="reason-title">Customer Satisfaction</h3>
            <p className="reason-description">
              Your comfort and satisfaction are our top priorities, and we
              strive to exceed your expectations with every project.
            </p>
          </div>

          <div className="reason-card">
            <div className="icon-container">
              <FaMoneyBillWave />
            </div>
            <h3 className="reason-title">Transparent Pricing</h3>
            <p className="reason-description">
              We provide clear, upfront quotes with no hidden fees, ensuring
              that you receive top-quality service at a competitive price.
            </p>
          </div>
        </div>
      </div>
      {/* ---Brands Section--- */}
      <div className="brands-container">
        <h2 className="brand-title">MACHINE BRANDS</h2>
        <p className="brand-description">
          Delta Cooling Systems Ltd uses the following brands of machine for
          installation and servicing of Air Conditioners.
        </p>
        <div className="brand-logos">
          <div className="brand-item">
            <img src={Bosch} alt="Bosch" />
          </div>
          <div className="brand-item">
            <img src={SolarPalau} alt="SolarPalau" />
          </div>
          <div className="brand-item">
            <img src={Bitzer} alt="Bitzer" />
          </div>
          <div className="brand-item">
            <img src={Daikin} alt="Daikin" />
          </div>
          <div className="brand-item">
            <img src={Airdale} alt="Airdale" />
          </div>
          <div className="brand-item">
            <img src={Toshiba} alt="Toshiba" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
