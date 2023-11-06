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

  const [mainPic, setMainPic] = useState("./images/image-product-1.jpg");

  return (
    //mobile
    <div>
      <div className="carousel">
        <button
          id="prev"
          onClick={() => setCurrentPic(currentPic === 0 ? 3 : currentPic - 1)}
        >
          PREV
        </button>
        <img src={pics[currentPic]} alt="sneaker pics" />
        <button
          id="next"
          onClick={() => setCurrentPic(currentPic === 3 ? 0 : currentPic + 1)}
        >
          NEXT
        </button>
      </div>

      {/* //desktop */}

      <div className="slide-pic">
        <img
          id="main"
          src={mainPic}
          alt="selected shoe view"
          height={400}
          width={400}
        />

        <div className="thumbnails ">
          <button onClick={() => setMainPic("./images/image-product-1.jpg")}>
            {" "}
            <img
              src="./images/image-product-1-thumbnail.jpg"
              alt="bottom and side shoe view"
            />
          </button>

          <button onClick={() => setMainPic("./images/image-product-2.jpg")}>
            {" "}
            <img
              src="./images/image-product-2-thumbnail.jpg"
              alt="side on top of rock and side shoe view"
            />
          </button>

          <button onClick={() => setMainPic("./images/image-product-3.jpg")}>
            {" "}
            <img
              src="./images/image-product-3-thumbnail.jpg"
              alt="one shoe on rock side shoe view"
            />
          </button>

          <button onClick={() => setMainPic("./images/image-product-4.jpg")}>
            {" "}
            <img
              src="./images/image-product-4-thumbnail.jpg"
              alt="one shoe on rock other side shoe view"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
