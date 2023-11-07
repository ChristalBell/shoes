import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Modal.scss";

const CartModal = () => {
  const { count } = useSelector((state) => state.counter);
  // const dispatch = useDispatch;
  return (
    <div className="flex cart-container ">
      <div className="shopping-cart ">
        <h4>Fall Limited Sneakers </h4>
        <p> {count}</p>

        {/* <p> {count} x price = total</p> */}
      </div>
      <button id="trash">
        <img src="./images/icon-delete.svg" alt="trashcan" />
      </button>
    </div>
  );
};

export default CartModal;
