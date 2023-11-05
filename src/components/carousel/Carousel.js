import React, { useState } from "react";
import "./carousel.scss";

const Carousel = () => {
  const [currentPic, setCurrentPic] = useState(0);
  const pics = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];

  return (
    //mobile
    <div className="carousel">
      <button id="prev" onClick={() => setCurrentPic(currentPic - 1)}>
        PREV
      </button>
      <img src={pics[currentPic]} alt="sneaker pics" />
      <button id="next" onClick={() => setCurrentPic(currentPic + 1)}>
        NEXT
      </button>
    </div>
  );
};

export default Carousel;
