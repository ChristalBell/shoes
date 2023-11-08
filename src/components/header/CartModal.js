import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Modal.scss";
import { emptyCart } from "../../app/counterReducer";

const CartModal = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  var total = count * 250;
  return (
    <div className="flex cart-container ">
      <div className="shopping-cart">
        <h3>Cart</h3>
        <h5>Fall Limited Sneakers </h5>

        <div className=" flex middle">
          <p>
            $250 x {count} = <b> {total}</b>
          </p>
          <button
            onClick={() => {
              dispatch(emptyCart());
            }}
            id="trash"
          >
            <img src="./images/icon-delete.svg" alt="trashcan" />
          </button>
        </div>
        <button id="checkout-button">Checkout</button>
      </div>
      {/* <p> {count} x price = total</p> */}
    </div>
  );
};

export default CartModal;
