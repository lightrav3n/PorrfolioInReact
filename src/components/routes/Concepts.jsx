import React from "react";
import { motion } from "framer-motion";

import "../style/MainStyle.css";

import one from "../../assets/images/CharacterDesign/1.jpg";
import two from "../../assets/images/CharacterDesign/2.jpg";
import three from "../../assets/images/CharacterDesign/3.jpg";

import Carousel from "../Carousel";

const Concepts = () => {
  const images = [
    {
      src: one,
      title: "Modular Desk",
      caption: "",
      showCaption: false,
    },
    {
      src: two,
      title: "Modular Desk",
      caption: "",
      showCaption: false,
    },
    {
      src: three,
      title: "Modular Desk",
      caption: "",
      showCaption: false,
    },
  ];

  return (
    <main>
      <section className="container">
        <motion.div 
          initial={{ x: -1000 }} // Initial position outside the viewport (left side)
          animate={{ x: 0 }} // Animate to position 0 (left edge of the viewport)
          transition={{ type: "spring", stiffness: 150, damping: 20 }} // Spring animation
        >
          <div className="text">
            <h2>
              <b>Concepts</b>
            </h2>
            <p>
              Just having fun and imagining different scenarios for different type
              of characters and how they might look based on the world that they
              might inhabit. <br />
              <b>early 2019 </b>
            </p>
          </div>
        </motion.div>
        <Carousel images={images} />
      </section>
    </main>
  );
};

export default Concepts;
