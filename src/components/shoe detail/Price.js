import React from "react";
import "./Price.scss";

const Price = () => {
  return (
    <div className="price flex">
      <div className="flex">
        <h1>$125.00</h1>
        <h3 id="percent">50% </h3>
      </div>
      <h3 id="discount-price">
        <s>$250</s>
      </h3>
    </div>
  );
};

export default Price;
