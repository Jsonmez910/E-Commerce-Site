import React, { useState } from "react";
import pic from "../public/cart.png";
import pic1 from "../public/order.png";
import pic2 from "../public/styledbg.png";
import pic3 from "../public/stripe.png";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const pics = [pic2, pic, pic1, pic3];
  const length = 4;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <div className="leftside">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      </div>
      {pics.map((picture, index) => {
        // console.log(pics[0]);
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={picture.src} alt="store pic" className="image" />
            )}
          </div>
        );
      })}
      <div className="rightside">
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>
    </div>
  );
}

export default ImageSlider;
