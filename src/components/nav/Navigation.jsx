import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "../style/NavigationStyle.css";
import HomeIcon from "../../assets/icons/home.png";

const Navigation = () => {
  const [menuChecked, setMenuChecked] = useState(true);

  // Function to toggle menu state
  const toggleMenu = () => {
    setMenuChecked(!menuChecked);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    if (window.innerWidth > 768) {
      setMenuChecked(true);
    } else {
      setMenuChecked(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuChecked(true);
      } else {
        setMenuChecked(false);
      }
    };

    // Call handleResize initially to set menuChecked based on initial screen size
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount to avoid memory leaks
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array to ensure this effect only runs once on component mount

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
      <div className="header ">
        <input
          type="checkbox"
          id="menu-toggle"
          checked={menuChecked}
          onChange={toggleMenu}
        />
        <label htmlFor="menu-toggle" id="menu-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <motion.nav
          id="menu"
          className="menu"
          initial={false}
          animate={menuChecked ? "open" : "closed"}
          variants={{
            open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            closed: { opacity: 0, y: "-100%", transition: { duration: 0.3 } }
          }}
        >
          <ul>
            <li>
              <NavLink
                to="/Portfolio/Sets?"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={closeMenu}
              >
                Sets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/Designs"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={closeMenu}
              >
                Designs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/Paintings"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={closeMenu}
              >
                Paintings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/Concepts"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={closeMenu}
              >
                Concepts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/Persona"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={closeMenu}
              >
                Persona
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/Refuge"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={closeMenu}
              >
                Refuge
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Portfolio/WebDev"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={closeMenu}
              >
                WebDev
              </NavLink>
            </li>
          </ul>
        </motion.nav>
      </div>
      <div className="header-elements">
        <ul>
          <li>
            <a
              href="https://www.artstation.com/davidalex"
              className="link"
              onClick={closeMenu}
            >
              Artstation
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alexdavidr"
              className="link"
              onClick={closeMenu}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <NavLink to="/Portfolio/Contact" className="link" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
