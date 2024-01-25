import React from "react";

import "../style/MainStyle.css";

import one from "../../assets/images/WebDevelopment/Peters/1.jpg";
import two from "../../assets/images/WebDevelopment/Peters/2.jpg";
import three from "../../assets/images/WebDevelopment/Peters/3.jpg";
import four from "../../assets/images/WebDevelopment/Peters/4.jpg";
import five from "../../assets/images/WebDevelopment/Peters/5.jpg";
import six from "../../assets/images/WebDevelopment/Peters/6.jpg";

import Carousel from "../Carousel";

const WebDev = () => {
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
            <b>Peters Bodenprobetechnik GmbH</b>
          </h2>
          <p>
          I took the initiative to redesign and update a company's webpage as part of a case study during an integration course at DCI. I successfully convinced the company to adopt my design, and we collaborated to implement the new webpage by the end of May 2023. The company specializes in soil sampling tools and machine-based solutions, offering a wide range of products for various applications. I focused on creating an intuitive user experience, showcasing their products, providing technical specifications, and highlighting their company history. The new webpage now accurately represents their expertise and offerings in soil sampling technologies<br /> <br /> Live site<a href="https://techbyp.com/"> here</a> <br />GitHub repo<a href="https://github.com/lightrav3n/Peters"> here</a> <br />
            <b>April-May 2023 </b>
          </p>
        </div>
    
        <Carousel images={images} />
   
      </section>
    </main>
  );
};

export default WebDev;
