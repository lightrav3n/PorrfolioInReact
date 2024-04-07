import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/NavigationStyle.css";
import HomeIcon from "../../assets/icons/home.png";
import Sidebar from "../sidebar/Sidebar";

const Navigation = ({ menu, setMenu }) => {
  const [menuChecked, setMenuChecked] = useState(false);

  const toggleMenu = () => {
    setMenuChecked(!menuChecked);
    setMenu(!menu);
  };

  const closeMenu = () => {
    if (window.innerWidth > 768) {
      setMenuChecked(true);
      setMenu(true)
    } else {
      setMenuChecked(false);
      setMenu(false)
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setMenuChecked(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (

    <header>
     <Sidebar  />
      {/* <div class="homeicon">
    
        <a class href="/">
          <img src={HomeIcon} width="40 " alt="home icon" />
        </a>
        
      </div> */}

      {/* <Sidebar  /> */}

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