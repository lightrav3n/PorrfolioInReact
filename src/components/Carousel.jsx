import React from "react";
import { useState } from "react";
import "./style/MainStyle.css";
// import "./style/CarouselStyle.css";

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
              <div
                key={index}
                style={{ height: "2px" }}
                onClick={() => setActiveIndex(index)}
              >
                <img src={images[index].src} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <img
                  src={image.src}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
                {image.showCaption && (
                  <div className="carousel-caption">
                    <h5>{image.title}</h5>
                    <p>{image.caption}</p>
                  </div>
                )}
              </div>
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
