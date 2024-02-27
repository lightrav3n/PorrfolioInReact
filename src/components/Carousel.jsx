import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style/MainStyle.css";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="carousel">
        <div className="carousel-indicators">
          {images.map((_, index) => (

            <motion.div
              key={index}
              style={{ height: "2px" }}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 1, y: -1000 }} // Initial position
              animate={{ opacity: 1, y: 0 }} // Final position
              exit={{ opacity: 1, y: 1000 }} // Exit position
              transition={{ type: "spring", stiffness: 100, damping: 30 }} // 
            >
              <img src={images[index].src} alt={`Slide ${index + 1}`} />
            </motion.div>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`carousel-item ${index === activeIndex ? "active" : ""
                }`}
              initial={{ opacity: 1, y: 1000 }} // Initial position
              animate={{ opacity: 1, y: 0 }} // Final position
              exit={{ opacity: 1, y: -1000 }} // Exit position
              transition={{ type: "spring", stiffness: 500, damping: 50 }} // Spring animation
            >
              <img src={image.src} alt={`Slide ${index + 1}`} />
              {image.showCaption && (
                <div className="carousel-caption">
                  <h5>{image.title}</h5>
                  <p>{image.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={handlePrev}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>


        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNext}
        >


          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
