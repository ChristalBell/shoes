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
      <Carousel />
      <ShoeDetail />
      <Price />
      <AddToCart />
    </div>
  );
}

export default App;
