import React from "react";
import StockList from "../components/StockList";
import dummyStocks from "../data/dummyStocks";
import "../styles/Global.css"

const HomePage = () => {
  return (
    <div>
      <h2 className="text_center">Welcome to the Groww More</h2>
      <p className="text_center">Track your favorite stocks and manage your portfolio!</p>
      <StockList stocks={dummyStocks} />
    </div>
  );
};

export default HomePage;
