import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ImageSlider.css";

const ImageSlider = ({
  slides,
}: {
  slides: { photoId: string; photoUrl: string }[] | undefined;
}) => {
  const [current, setCurrent] = useState(0);
  const length = slides?.length ? slides?.length : 0;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <IoIosArrowBack className="left-arrow" onClick={prevSlide} />
      <IoIosArrowForward className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                referrerPolicy="no-referrer"
                src={slide.photoUrl}
                alt="travel image"
                className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
