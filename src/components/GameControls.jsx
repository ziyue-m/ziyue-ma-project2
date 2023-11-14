import React, { useContext } from 'react';
import { GameStateContext } from './GameStateContext';
import { normalWords, hardWords } from './wordList'; 
import { createBoardDefault } from './boardHelpers';

function GameControls() {
    const { gameState, setGameState } = useContext(GameStateContext);

    const resetGame = () => {
        const selectedWords = gameState.difficulty === 'hard' ? hardWords : normalWords;
        const randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
        const rows = gameState.difficulty === 'hard' ? 5 : 6;
        const cols = gameState.difficulty === 'hard' ? 7 : 6;

        setGameState({
            ...gameState,
            currentWord: randomWord,
            board: createBoardDefault(rows, cols),
            currentGuess: '',
            attempts: 0,
            message: '',
            gameOver: false
        });
    };

    return (
        <div>
            {!gameState.gameOver ? (
                <button onClick={resetGame}>Reset Game</button>
            ) : (
                <button onClick={resetGame}>Play Again</button>
            )}
        </div>
    );
}

export default GameControls;
