import React from "react";
import "../src/Styles/App.css";
import flowerData from "./Assets/Data/data";
import FlowerCard from "./Components/FlowerCard";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";

function App() {
  /*-----------------------Functions----------------------------------*/
  let flowers = flowerData.map((flower, index) => {
    return (
      <FlowerCard
        {...flower}
        className="flower-card"
        key={index}
        alt={""}
        id={index}
      />
    );
  });

  /*-----------------------JSX----------------------------------*/
  return (
    <div className="App">
      <Navbar />
      <div className="jumbo-cards">
        <Jumbotron />
        <div className="all-flowercards">{flowers}</div>
      </div>
    </div>
  );
}

export default App;
