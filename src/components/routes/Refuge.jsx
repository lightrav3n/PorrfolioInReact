import React from "react";

import "../style/MainStyle.css";

import one from "../../assets/images/SITMT/1.jpg";
import two from "../../assets/images/SITMT/2.jpg";
import three from "../../assets/images/SITMT/3.jpg";
import four from "../../assets/images/SITMT/4.jpg";
import five from "../../assets/images/SITMT/5.jpg";
import six from "../../assets/images/SITMT/6.jpg";

import Carousel from "../Carousel";

const Refuge = () => {
  const images = [
    {
      src: one,
      title: "",
      caption:"",
      showCaption: false,
    },
    {
      src: two,
      title: "",
      caption:"",
      showCaption: false,
    },
    {
      src: three,
      title: "",
      caption:"",
      showCaption: false,
    },
    {
        src: four,
        title: "",
        caption:"",
        showCaption: false,
      },
      {
        src: five,
        title: "",
        caption:"",
        showCaption: false,
      },
      {
        src: six,
        title: "",
        caption:"",
        showCaption: false,
      },
  ];

  return (
    <main>
      <section className="container">
        <div className="text">
          <h2>
            <b>mountain shelter</b>
          </h2>
          <p>
          Part of the portfolio for the master's thesis <br/><br/> <q><i>The mountain shelter area (refuge) offers an adaptable, modular structure that fits in with the mountain terrain, where tourists can relax, take shelter, or charge their smart devices. It's powered by solar energy, cost-effective, environmentally friendly, and self-sustainable.</i></q> <br/> <b>2017</b></p>
        </div>
        <Carousel images={images} />
      </section>
    </main>
  );
};

export default Refuge;
