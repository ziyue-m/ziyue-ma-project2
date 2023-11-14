import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DifficultySelectPage() {
  const navigate = useNavigate();

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
    <div className="difficulty-select-page">
      <h1>Welcome to Wordle</h1>
      <button onClick={() => navigate('/game/normal')}>Normal Mode</button>
      <button onClick={() => navigate('/game/hard')}>Hard Mode</button>
    </div>
    </div>
  );
}

export default DifficultySelectPage;