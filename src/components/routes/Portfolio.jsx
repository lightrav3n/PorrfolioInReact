import React, { useState } from "react";
import Navigation from "../nav/Navigation";
import Footer from "../nav/Footer";
import { Outlet } from "react-router-dom";

import "../style/Portfolio.css"

const Portfolio = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Navigation menu={menu} setMenu={setMenu} />
      <div
        className={`menu-container ${menu ? 'menu-open' : ''}`}
      >
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
