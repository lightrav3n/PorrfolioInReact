import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/icons/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArtstation, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../style/FooterStyle.css";

const Footer = () => {
  return (
    <footer className="foot">
      <div className="left">
        <Link to="https://www.artstation.com/davidalex" className="link">
          <FontAwesomeIcon icon={faArtstation} /> Artstation
        </Link>
        <Link to="https://www.linkedin.com/in/alexdavidr" className="link">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </Link>{" "}
        <Link to="/Contact" className="link">
          <FontAwesomeIcon icon={faEnvelope} /> Contact
        </Link>
      </div>{" "}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Portfolio/Sets">Set Design</Link>
        </li>
        <li>
          <Link to="/Portfolio/Designs">Product Design</Link>
        </li>
        <li>
          <Link to="/Portfolio/Paintings">Digital Painting</Link>
        </li>
        <li>
          <Link to="/Portfolio/Concepts">Persona Concept</Link>
        </li>
        <li>
          <Link to="/Portfolio/Characters">Characters</Link>
        </li>
        <li>
          <Link to="/Portfolio/Refuge">Mountain Shelter</Link>
        </li>
        <li>
          <Link to="/Portfolio/WebDev">Web Development</Link>
        </li>
      </ul>
      <div className="right">
        <ul>
          <ul>
            <li>
              <b>© David Alex 2023</b>
            </li>
            <li>All rights reserved</li>
          </ul>
        </ul>
        <ul>
          <li>
            <img src={logo} alt="logo" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
