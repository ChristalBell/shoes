import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addToCart, added, subtracted } from "../../app/counterReducer";
import "./AddToCart.scss";

const AddToCart = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="cart-quantity">
      <div className=" quantity-container">
        <button onClick={() => dispatch(subtracted())}>
          <div> - </div>
        </button>
        <div className="quantity-display"> {count < 0 ? 0 : count}</div>
        <button onClick={() => dispatch(added())}> + </button>
      </div>
      <button onClick={() => dispatch(addToCart())} id="cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
