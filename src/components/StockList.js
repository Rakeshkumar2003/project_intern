import React from "react";
import { Link } from "react-router-dom";
import "../styles/StockList.css";

const StockList = ({ stocks }) => {
  return (
    <ul className="stock-list">
      {stocks.map((stock) => (
        <li key={stock.id} className="stock-item">
          <h3>{stock.name}</h3>
          <p>Price: ${stock.price}</p>
          <p>Change: {stock.change}</p>
          <Link to={`/stock/${stock.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  );
};

export default StockList;
