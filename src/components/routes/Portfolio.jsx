import React from "react";
import Navigation from "../nav/Navigation";
import Footer from "../nav/Footer";
import { Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <Navigation />

      <Outlet />

      <Footer />
    </>
  );
};

export default Portfolio;
