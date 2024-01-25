import React from "react";

import "../style/MainStyle.css";

import one from "../../assets/images/CharacterDesign/0.jpg";
import two from "../../assets/images/CharacterDesign/5.jpg";
import three from "../../assets/images/CharacterDesign/6.jpg";
import four from "../../assets/images/CharacterDesign/7.jpg";

import Carousel from "../Carousel";

const Persona = () => {
  const images = [
    {
      src: one,
      title: "WIZARD WITH PET",
      caption: "A DRAWING OF A WIZARD GIRL CASTING A SPIRIT ANIMAL SPELL.",
      showCaption: true,
    },
    {
      src: two,
      title: "WIZARD WITH PET",
      caption: "Caption for the second image",
      showCaption: false,
    },
    {
      src: three,
      title: "WIZARD WITH PET",
      caption: "Caption for the third image",
      showCaption: false,
    },
    {
      src: four,
      title: "WIZARD WITH PET",
      caption: "Caption for the fourth image",
      showCaption: false,
    },
  ];

  return (
    <main>
      <section className="container">
        <div className="text">
          <h2>
            <b>Persona Design</b>
          </h2>
          <p>
            a collection of characters in awesome stances. <br />
            <b>early 2019 </b>
          </p>
        </div>
        <Carousel images={images} />
      </section>
    </main>
  );
};

export default Persona;
