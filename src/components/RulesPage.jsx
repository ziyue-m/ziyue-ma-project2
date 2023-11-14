import React from 'react';
import { Link } from "react-router-dom";

function RulePage() {
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
      <div className="rule-page">
          <h1>Wordle Game Rules</h1>
          <div className="rules-content">
              <p>In Wordle, the game secretly chooses a random word that the user will try to guess within a certain number of attempts. The length of the word and the number of attempts are based on the difficulty selected by the user.</p>
              <p>Easy: 6 letters, 6 attempts</p>
              <p>Hard: 7 letters, 5 attempts</p>
              <p>Users must input a word that matches the length defined by the difficulty level.</p>
              <p>If the user inputs the correct word, a congratulatory message is displayed. For incorrect guesses, the game provides clues based on the letter positions. Letters in the correct spot are highlighted in green, letters in the word but in the wrong spot are highlighted in yellow, and letters not in the word are marked in gray.</p>
              <p>Example: If the correct word is "FACES" and the user submits "EATS", the letter 
                <span className="rule-correct"> A</span> will be highlighted in green, and 
                <span className="rule-wrong-position"> E</span> in yellow. The second 'E' remains 
                <span className="rule-incorrect"> gray</span> as it only appears once in the correct word.</p>
          </div>
          <button onClick={() => window.history.back()}>Back to HomePage</button>
      </div>
      </div>
  );
}


export default RulePage;
