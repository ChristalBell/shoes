import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import { selectCount } from "../../app/counterReducer";
import { useDispatch } from "react-redux";
import { added, subtracted } from "../../app/counterReducer";
import "./AddToCart.scss";

const AddToCart = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="cart-quantity">
      <div className="flex" id="quantity-display">
        <button onClick={() => dispatch(subtracted())}> - </button>
        <div> {count} </div>
        <button onClick={() => dispatch(added())}> + </button>
      </div>
      <button id="cart-button"> Add to Cart </button>
    </div>
  );
};

export default AddToCart;
