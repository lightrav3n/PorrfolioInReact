import React from "react";
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
  return (
    <div className="body">
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
            <li className="name">David Alex</li>
          </ul>
          <ul>
            <li>
              <Link to="/contact" className="cta">
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
              <Link to="/Portfolio/sets">
                <span> Sets </span>
              </Link>
              <img src={Servier1} alt="Set Design" />
            </li>
            <li className="panel">
              <Link to="/Portfolio/designs">
                <span> Designs </span>
              </Link>
              <img src={GreenPepper} alt="Product Design" />
            </li>
            <li className="panel">
              <Link to="/Portfolio/Paintings">
                <span> Paintings </span>
              </Link>
              <img src={DigitalPainting} alt="Paintings" />
            </li>
            <li className="panel">
              <Link to="/Portfolio/Concepts">
                <span> Concepts </span>
              </Link>
              <img src={CharacterDesign} alt="Persona Concepts" />
            </li>
            <li className="panel">
              <Link to="/Portfolio/Persona">
                <span> Persona </span>
              </Link>
              <img src={Character} alt="Characters" />
            </li>
            <li className="panel">
              <Link to="/Portfolio/Refuge">
                <span> Refuge </span>
              </Link>
              <img src={SITMT} alt="SITMT" />
            </li>
            <li className="panel">
              <Link to="/Portfolio/WebDev">
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
