import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import { selectCount } from "../../app/counterReducer";
import { useDispatch } from "react-redux";
import { added, subtracted } from "../../app/counterReducer";

const AddToCart = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex">
        <button onClick={() => dispatch(subtracted())}> - </button>
        <div> {count} </div>
        <button onClick={() => dispatch(added())}> + </button>
      </div>
      <button> Add to Cart </button>
    </div>
  );
};

export default AddToCart;
