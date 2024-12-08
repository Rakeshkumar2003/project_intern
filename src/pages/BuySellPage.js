import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dummyStocks from "../data/dummyStocks";
import BuySellForm from "../components/BuySellForm";

const BuySellPage = () => {
  const { id } = useParams();
  const stock = dummyStocks.find((stock) => stock.id === parseInt(id));
  const [portfolio, setPortfolio] = useState([]);

  const handleTransaction = (quantity, action) => {
    setPortfolio((prevPortfolio) => [
      ...prevPortfolio,
      { stock, quantity, action },
    ]);
    alert(`${action === "buy" ? "Bought" : "Sold"} ${quantity} shares of ${stock.name}`);
  };

  if (!stock) {
    return <p>Stock not found!</p>;
  }

  return (
    <div>
      <h2>{stock.name} - Buy/Sell</h2>
      <BuySellForm stock={stock} onTransaction={handleTransaction} />
      <h3>Your Portfolio</h3>
      <ul>
        {portfolio.map((item, index) => (
          <li key={index}>
            {item.action.toUpperCase()} {item.quantity} shares of {item.stock.name} @ $
            {item.stock.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuySellPage;
