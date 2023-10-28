import React from "react";

import "./App.scss";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import ShoeDetail from "./components/shoe detail/ShoeDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Carousel />
        <ShoeDetail />
      </div>
    </div>
  );
}

export default App;
