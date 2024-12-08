import React from "react";
import { useParams } from "react-router-dom";
import StockChart from "../components/StockChart";
import dummyStocks from "../data/dummyStocks";

const StockPage = () => {
  const { id } = useParams();
  const stock = dummyStocks.find((stock) => stock.id === parseInt(id));

  if (!stock) {
    return <p>Stock not found!</p>;
  }

  return (
    <div>
      <h2>{stock.name}</h2>
      <p>Current Price: ${stock.price}</p>
      <p>Change: {stock.change}</p>
      <StockChart stock={stock} />
    </div>
  );
};

export default StockPage;
