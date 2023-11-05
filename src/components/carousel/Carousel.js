import React from "react";
import "./carousel.scss";

const Carousel = () => {
  const buttons = document.querySelectorAll("[data-carousel-button]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");

      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
  });
  return (
    <div>
      <section>
        <div className="carousel" data-carousel>
          <button
            className="carousel-button previous"
            data-carousel-button="previous"
          >
            previous
          </button>

          <button className="carousel-button next" data-carousel-button="next">
            next
          </button>

          <ul data-slides>
            <li className="slide" data-active>
              <img alt="first" src="./images/image-product-1.jpg " />
            </li>
            <li className="slide">
              <img alt="second" src="./images/image-product-2.jpg" />
            </li>
            <li className="slide">
              <img alt="third" src="./images/image-product-3.jpg" />
            </li>
            <li className="slide">
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
