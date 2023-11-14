
import React, { useContext } from 'react';
import { GameStateContext } from './GameStateContext';

function GameStatus() {
    const { gameState } = useContext(GameStateContext);

    return (
        <div>
            <h1>Wordle - {gameState.difficulty.toUpperCase()} Mode</h1>
            {gameState.message && <div className="game-message">{gameState.message}</div>}
            {!gameState.gameOver && <div className="attempts-remaining">Attempts remaining: {gameState.difficulty === 'hard' ? 5 - gameState.attempts : 6 - gameState.attempts}</div>}
        </div>
    );
}

export default GameStatus;

