import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/deltalogo.png";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menu, setMenu] = useState("home");

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navMenu") && !event.target.closest(".mobileMenu-Icon")) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    setShowMenu(false); // Close the menu when an item is clicked
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Delta Cooling Systems Logo" className="logo" />
      <div className="organizationName">
        <h1>DELTA COOLING SYSTEMS LIMITED</h1>
        <div className="underline"></div>
        <h2>Your Ultimate and Trusted Cooling Solutions Provider</h2>
      </div>
      <div className="navbar-menu">
        <ul className="navbarMenuListItem">
          <li onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => handleMenuClick("about")} className={menu === "about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => handleMenuClick("services")} className={menu === "services" ? "active" : ""}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Screen Navbar */}
      {showMenu ? (
        <RiCloseFill className="mobileMenu-Icon" aria-label="Close Menu" onClick={() => setShowMenu(false)} />
      ) : (
        <TiThMenu className="mobileMenu-Icon" aria-label="Open Menu" onClick={() => setShowMenu(true)} />
      )}
      <ul className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <li onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => handleMenuClick("about")} className={menu === "about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => handleMenuClick("services")} className={menu === "services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
        <li onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
