import React from "react";

const AddToCart = () => {
  return (
    <div className="add-to-cart">
      <div className="quantity">
        <button>-</button>
        <div>quantity</div>
        <button>+</button>
      </div>

      <button>Add to cart</button>
    </div>
  );
};

export default AddToCart;
