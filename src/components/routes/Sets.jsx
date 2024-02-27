import React from "react";
import { motion } from "framer-motion";

import "../style/MainStyle.css";

import one from "../../assets/images/Scenography/serv.jpg";
import two from "../../assets/images/Scenography/Oan.jpg";
import three from "../../assets/images/Scenography/Provocarea_star.jpg";

import Carousel from "../Carousel";
import Caption from "../Caption";

const Persona = () => {
    const images = [
        {
          src: one,
          title: "STAND DESIGN",
          caption: (
            <Caption
              client="SERVIER"
              name="Advertising stand in Brasov at a Medical symposium."
            />
          ),
          showCaption: true,
        },
        {
          src: two,
          title: "Stand Design",
          caption: (
            <Caption client="Oanda" name="Advertising stand, New York" />
          ),
          showCaption: true,
        },
        {
          src: three,
          title: "TV Set Design",
          caption: (
            <Caption
              client="TVR"
              name="TV set design for 'Provocarea starurilor' show, aired late 2018 on TVR1, Bucharest"
            />
          ),
          showCaption: true,
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
              various projects i designed in the past years for different
                broadcasting networks and companies. <br /><b>2016 - 2019 </b>
            </p>
          </div>
        </motion.div>
        <Carousel images={images} />
      </section>
    </main>
  );
};

export default Persona;
