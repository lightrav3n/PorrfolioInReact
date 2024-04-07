import React, { useState } from "react";
import { Link } from "react-router-dom";
import Servier1 from "../assets/images/Scenography/Servier/Servier1.jpg";
import GreenPepper from "../assets/images/ProductDesign/GreenPepper/1.jpg";
import DigitalPainting from "../assets/images/DigitalPainting/3.jpg";
import CharacterDesign from "../assets/images/CharacterDesign/1.jpg";
import Character from "../assets/images/CharacterDesign/0.jpg";
import SITMT from "../assets/images/SITMT/ALEX_David_246D_Page_11.jpg";
import WebDev from "../assets/images/WebDevelopment/Peters/1.jpg";

import "./style/HomePageStyle.css";

const Homepage = () => {
  const [reverseAnimation, setReverseAnimation] = useState(false);

  const handlePanelClick = (e, path) => {
    e.preventDefault(); // Prevent the default behavior of the link
    setReverseAnimation(true);
    setTimeout(() => {
      window.location.href = path; // Navigate to the link address after the delay
    }, 500); // Adjust the duration as needed to match your animation duration
  };

  return (

    <div className={`body ${reverseAnimation ? "reverse-animation" : ""}`}>
      <header className="main">

        <nav>
          <ul>
            <li>
              <Link to="/artstation" className="link">
                Artstation
              </Link>
            </li>
            <li>
              <Link to="/linkedin" className="link">
                Linkedin
              </Link>
            </li>
          </ul>
          <ul>
            <li id="name"><a href="http://davidalex.eu">David Alex</a></li>
          </ul>
          <ul>
            <li>
              <Link to="/portfolio/contact" className="link cont">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <article className="hero">
          <ul className="panels">
            <li className="panel">
              <Link to="/portfolio/sets" onClick={(e) => handlePanelClick(e, "/portfolio/sets")}>
                <span> Sets </span>
              </Link>
              <img src={Servier1} alt="Set Design" />
            </li>
            <li className="panel">
              <Link to="/portfolio/designs" onClick={(e) => handlePanelClick(e, "/portfolio/designs")}>
                <span> Designs </span>
              </Link>
              <img src={GreenPepper} alt="Product Design" />
            </li>
            <li className="panel">
              <Link to="/portfolio/paintings" onClick={(e) => handlePanelClick(e, "/portfolio/paintings")}>
                <span> Paintings </span>
              </Link>
              <img src={DigitalPainting} alt="Paintings" />
            </li>
            <li className="panel">
              <Link to="/portfolio/concepts" onClick={(e) => handlePanelClick(e, "/portfolio/concepts")}>
                <span> Concepts </span>
              </Link>
              <img src={CharacterDesign} alt="Persona Concepts" />
            </li>
            <li className="panel">
              <Link to="/portfolio/persona" onClick={(e) => handlePanelClick(e, "/portfolio/persona")}>
                <span> Persona </span>
              </Link>
              <img src={Character} alt="Characters" />
            </li>
            <li className="panel">
              <Link to="/portfolio/refuge" onClick={(e) => handlePanelClick(e, "/portfolio/refuge")}>
                <span> Refuge </span>
              </Link>
              <img src={SITMT} alt="SITMT" />
            </li>
            <li className="panel">
              <Link to="/portfolio/webdev" onClick={(e) => handlePanelClick(e, "/portfolio/webdev")}>
                <span> WebDev </span>
              </Link>
              <img src={WebDev} alt="webdevelopment" />
            </li>
          </ul>
          <h1>
            <span className="gradient-text letter">p</span>
            <span className="gradient-text letter">o</span>
            <span className="gradient-text letter">r</span>
            <span className="gradient-text letter">t</span>
            <span className="gradient-text letter">f</span>
            <span className="gradient-text letter">o</span>
            <span className="gradient-text letter">l</span>
            <span className="gradient-text letter">i</span>
            <span className="gradient-text letter">o</span>
          </h1>
        </article>
      </section>
    </div>
  );
};

export default Homepage;
