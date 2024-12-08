import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Groww More</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Logout</Link>
      </nav>
    </header>
  );
};

export default Header;
