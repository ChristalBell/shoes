import React from "react";
import Price from "./Price";
import AddToCart from "./AddToCart";
import "./ShoeDetail.scss";
const ShoeDetail = () => {
  return (
    <div className="shoe-detail">
      <h3>Sneaker Company</h3>
      <h2>Fall Limited Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <Price />
      <AddToCart />
    </div>
  );
};

export default ShoeDetail;
