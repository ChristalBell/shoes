import React from "react";

import "./App.scss";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import ShoeDetail from "./components/shoe detail/ShoeDetail";
import AddToCart from "./components/shoe detail/AddToCart";
import Price from "./components/shoe detail/Price";
function App() {
  return (
    <div className="App">
      <Header />
      <div
        className="flex container"
        style={{ justifyContent: "center", marginRight: "2rem" }}
      >
        <Carousel
          className="flex"
          style={{ width: "40vw", justifyContent: "center" }}
        />

        <div style={{ width: "40vw" }}>
          <ShoeDetail />
          <Price />
          <AddToCart />
        </div>
      </div>
    </div>
  );
}

export default App;
