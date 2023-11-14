import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-logo">Wordle</div>
      <div className="navbar-links">
      <Link to="/" className="nav-link">Home</Link>
          <Link to="/difficulty-select" className="nav-link">Start Game</Link>
          <Link to="/rules" className="nav-link">Game Rules</Link>
      </div>
    </nav>
    <div className="home-page">
      <h1>Welcome to Wordle</h1>
      <h2>By: ZIYUE MA</h2>
      <div className="home-links">
      <Link to="/difficulty-select" className="home-link">Start Game</Link>
        <Link to="/rules" className="home-link">Game Rules</Link>
      </div>
    </div>
    </div>
  );
}

export default HomePage;