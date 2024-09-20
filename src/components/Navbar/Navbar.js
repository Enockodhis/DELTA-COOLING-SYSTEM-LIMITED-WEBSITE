import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/deltalogo.png";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Function to close the mobile menu
  const closeMenu = () => setShowMenu(false);

  // Define the navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="Delta Cooling Systems Limited Logo" className="logo" />
      </div>

      {/* Organization Name Section */}
      <div className="organizationName">
        <h1>DELTA COOLING SYSTEMS LIMITED</h1>
        <div className="underline"></div>
        <h2>Your Ultimate and Trusted Cooling Solutions Provider</h2>
      </div>

      {/* Desktop Navigation Menu */}
      <ul className="navbarMenuListItem">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              exact={link.path === "/"}
              to={link.path}
              activeClassName="active"
              onClick={closeMenu} // Ensures the mobile menu closes when a link is clicked
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <button
        className="mobileMenu-Icon"
        onClick={() => setShowMenu((prev) => !prev)}
        aria-label={showMenu ? "Close Menu" : "Open Menu"}
      >
        {showMenu ? <RiCloseFill /> : <TiThMenu />}
      </button>

      {/* Mobile Navigation Menu */}
      {showMenu && (
        <ul className="navMenu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                exact={link.path === "/"}
                to={link.path}
                activeClassName="active"
                onClick={closeMenu} // Closes the menu when a link is clicked
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
