import React from "react";

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
        <Carousel images={images} />
      </section>
    </main>
  );
};

export default Persona;
