import React, { useEffect, useContext } from 'react';
import { Link, useNavigate, useParams} from 'react-router-dom';
import Board from './Board';
import Keyboard from './Keyboard';
import { normalWords, hardWords } from './wordList';
import { createBoardDefault, checkGuess } from './boardHelpers';
import GameControls from './GameControls';
import GameStatus from './GameStatus';
import { GameStateContext } from './GameStateContext';
import { normalDifficultyWords, hardDifficultyWords } from './validWords';


function GamePage() {
  const navigate = useNavigate();
  const { difficulty = 'normal' } = useParams();
  const { gameState, setGameState } = useContext(GameStateContext);
  
  // hook to save game state
  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(gameState));
}, [gameState]);

 // hook to load game state  
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('gameState'));
    if (savedState) {
        setGameState(savedState);
    }
  }, [setGameState]);

  // hook to initialize game
  useEffect(() => {
    const selectedWords = difficulty === 'hard' ? hardWords : normalWords;
    const randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
    const rows = difficulty === 'hard' ? 5 : 6;
    const cols = difficulty === 'hard' ? 7 : 6;
    
    setGameState(prevState => ({
        ...prevState,
        currentWord: randomWord,
        board: createBoardDefault(rows, cols),
        attempts: 0,
        message: '',
        gameOver: false,
        difficulty: difficulty
    }));
}, [difficulty, setGameState]);

// hook to update board
  useEffect(() => {
    if (!gameState.gameOver && gameState.attempts < (gameState.difficulty === 'hard' ? 5 : 6)) {
      setGameState(prevState => {
        const newBoard = [...prevState.board];
        const currentRow = newBoard[prevState.attempts];

        // update the current row with the current guess
        currentRow.forEach((cell, index) => {
          cell.letter = index < prevState.currentGuess.length ? prevState.currentGuess[index] : '';
        });

        return {...prevState, board: newBoard};
      });
    }
  }, [gameState.currentGuess, gameState.attempts, gameState.gameOver, gameState.difficulty, setGameState]);

  // handle key press
  const handleKeyPress = (key) => {
    if (key === 'Backspace') {
        setGameState(prevState => ({
            ...prevState,
            currentGuess: prevState.currentGuess.slice(0, -1)
        }));
    } else if (key === 'Enter') {
        handleSubmitGuess();
    } else if (/^[A-Za-z]$/.test(key) && gameState.currentGuess.length < (difficulty === 'hard' ? 7 : 6)) {
        setGameState(prevState => ({
            ...prevState,
            currentGuess: prevState.currentGuess + key
        }));
    }
};
 
  // handle user guess
  const handleSubmitGuess = () => {
    // check if the guess is the correct length
    if (gameState.currentGuess.length !== (gameState.difficulty === 'hard' ? 7 : 6)) {
        setGameState(prevState => ({
            ...prevState,
            message: "Incorrect length of the guess."
        }));
        return;
    }
    // check if the guess is a valid English word
    const validWords = gameState.difficulty === 'hard' ? hardDifficultyWords : normalDifficultyWords;

        if (!validWords.includes(gameState.currentGuess)) {
            setGameState(prevState => ({
                ...prevState,
                message: "Please enter a valid English word.",
                currentGuess: '' // clear the current guess
            }));
            return;
        }
    const guessResult = checkGuess(gameState.currentGuess, gameState.currentWord);
    const newBoard = [...gameState.board];
    newBoard[gameState.attempts] = guessResult.map((state, index) => ({
        letter: gameState.currentGuess[index],
        state: state
    }));
    
    const isCorrect = guessResult.every(state => state === 'correct');
    const isGameOver = isCorrect || gameState.attempts + 1 === (gameState.difficulty === 'hard' ? 5 : 6);

    setGameState(prevState => ({
        ...prevState,
        board: newBoard,
        attempts: prevState.attempts + 1,
        message: isCorrect ? "Congratulations! You've guessed the word!" : isGameOver ? `Game Over! The word was ${gameState.currentWord}.` : '',
        gameOver: isGameOver,
        currentGuess: ''
    }));
};
  
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

      <div className="game-page">
            <h1>Game Page</h1>
            <GameStatus />
            <Board board={gameState.board} />
            {!gameState.gameOver && <Keyboard onKeyPress={handleKeyPress} />}
            <GameControls /> 
      </div>
    </div>
  );
}

export default GamePage;