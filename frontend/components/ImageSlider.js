import React from "react";
import {SliderData} from './SliderData'
import pic from "../public/mountains.jpg"
function ImageSlider() {
  return (
    <div>
      {SliderData.map((slide, index) => {
        return(
            <img src={slide.image} alt="asdad" layout="fill"/>
        )
      })}

    </div>
  );
}

export default ImageSlider;
