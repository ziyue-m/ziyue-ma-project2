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
          <h1>How to Play Wordle</h1>
          <div className="rules-content">
            <p>Guess the secret word in a limited number of tries.</p>
            <p>Each guess must match the length defined by the selected difficulty level:</p>
            <ul>
                <li>Easy: 6 letters, 6 attempts</li>
                <li>Hard: 7 letters, 5 attempts</li>
            </ul>
            <p>After each guess, the color of the tiles will indicate how close your guess was:</p>
            <div class="color-explanation">
                  <div class="color-box correct">Correct</div>: Letter is in the word and in the right position.
              </div>
              <div class="color-explanation">
                  <div class="color-box wrong-position">Wrong Pos</div>: Letter is in the word but in the wrong spot.
              </div>
              <div class="color-explanation">
                  <div class="color-box incorrect">Incorrect</div>: Letter is not in the word in any spot.
              </div>
              <p>Example: If the correct word is "HAPPY" and the guess is "PARTY", 'P' would be <span className="example correct">Correct</span>, 'A' would be in <span className="example wrong-position">Wrong Position</span>, and 'R' and 'T' would be <span className="example incorrect">Incorrect</span>.</p>
        </div>
        <button onClick={() => window.history.back()}>Back to Game</button>
    </div>
    </div>
  );
}


export default RulePage;
