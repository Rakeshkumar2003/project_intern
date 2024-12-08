import React, { useState } from "react";
import "../styles/BuySellForm.css";

const BuySellForm = ({ stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You bought ${quantity} shares of ${stock.name}!`);
  };

  return (
    <form className="buy-sell-form" onSubmit={handleSubmit}>
      <h3>Buy {stock.name}</h3>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button type="submit">Buy</button>
    </form>
  );
};

export default BuySellForm;
