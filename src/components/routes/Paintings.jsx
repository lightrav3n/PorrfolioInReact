import React from "react";

import "../style/MainStyle.css";

import one from "../../assets/images/DigitalPainting/1.jpg";
import two from "../../assets/images/DigitalPainting/2.jpg";
import three from "../../assets/images/DigitalPainting/3.jpg";

import Carousel from "../Carousel";

const Paintings = () => {
  const images = [
    {
      src: one,
      title: "WIZARD WITH PET",
      caption: "A DRAWING OF A WIZARD GIRL CASTING A SPIRIT ANIMAL SPELL.",
      showCaption: false,
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
  ];

  return (
    <main>
      <section className="container">
        <div className="text">
          <h2>
            <b>Digital Paintings</b>
          </h2>
          <p>
            Some portraits i did while practicing painting in adobe photoshop,
            back in
            <br />
            <b>2018 </b>
          </p>
        </div>
        <Carousel images={images} />
      </section>
    </main>
  );
};

export default Paintings;
