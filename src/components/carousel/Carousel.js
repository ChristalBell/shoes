import React from "react";
import "./carousel.scss";

const Carousel = () => {
  return (
    <div>
      <section>
        <div className="carousel">
          <button className="carousel-button previous">previous</button>
          <button className="carousel-button next">next</button>
          <ul>
            <li className="slide" data-active>
              <img alt="first" src="./images/image-product-1.jpg " />
            </li>
            <li className="slide">
              {" "}
              <img alt="second" src="./images/image-product-2.jpg" />
            </li>
            <li className="slide">
              {" "}
              <img alt="third" src="./images/image-product-3.jpg" />
            </li>
            <li className="slide">
              {" "}
              <img alt="fourth" src="./images/image-product-4.jpg" />
            </li>
          </ul>
        </div>
      </section>

      {/* // desktop version */}
      <div className="slide-pic">
        <div>
          <img className="main" src="./images/image-product-1.jpg" alt="main" />
          <div className="overlay"></div>
        </div>

        <div className="thumb-bar">
          <img
            className="pic1 thumbnail"
            src="./images/image-product-1-thumbnail.jpg"
            alt="pic1"
          />

          <img
            className="pic2 thumbnail"
            src="./images/image-product-2-thumbnail.jpg"
            alt="pic2"
          />

          <img
            className="pic3 thumbnail"
            src="./images/image-product-3-thumbnail.jpg"
            alt="pic3"
          />

          <img
            className="pic4 thumbnail"
            src="./images/image-product-4-thumbnail.jpg"
            alt="pic4"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
