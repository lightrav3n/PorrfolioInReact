import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../style/NavigationStyle.css";
import HomeIcon from "../../assets/icons/home.png";

const Navigation = () => {

  const [menuChecked, setMenuChecked] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setMenuChecked(!menuChecked);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    if (menuChecked) {
      setMenuChecked(false);
    }
  };

  // useEffect to add event listener on component mount
  useEffect(() => {
    // Add event listener to close menu when a NavLink is clicked
    const handleLinkClick = () => {
      closeMenu();
    };

    // Attach the event listener
    document.querySelectorAll(".menu a").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Remove event listener on component unmount
    return () => {
      document.querySelectorAll(".menu a").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, [menuChecked]); // Re-run effect when menuChecked state changes


  return (
    <header>
      <div className="homeicon">
        <NavLink to="/">
          <img src={HomeIcon} width="40" alt="home" />
        </NavLink>
      </div>
      <div className="header">
        <input type="checkbox" id="menu-toggle" checked={menuChecked}
          onChange={toggleMenu} />
        <label htmlFor="menu-toggle" id="menu-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <nav id="menu" className="menu">
          <ul>
            <li>
              <NavLink
                to="/Portfolio/Sets"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Sets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/Designs"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Designs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/Paintings"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Paintings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/Concepts"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Concepts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/Persona"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Persona
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/Refuge"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Refuge
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/WebDev"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                WebDev
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-elements">
        <ul>
          <li>
            <a href="https://www.artstation.com/davidalex" className="link">
              Artstation
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexdavidr" className="link">
              LinkedIn
            </a>
          </li>
          <li>
            <NavLink to="/Portfolio/Contact" className="link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
