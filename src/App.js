import React from "react";

import "./App.scss";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import ShoeDetail from "./components/shoe detail/ShoeDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <ShoeDetail />
    </div>
  );
}

export default App;
