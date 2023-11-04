import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCount } from "../../app/counterReducer";

const AddToCart = () => {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <div className="flex">
        <button> - </button>
        <div> {count} </div>
        <button> + </button>
      </div>
      <button> Add to Cart </button>
    </div>
  );
};

export default AddToCart;
