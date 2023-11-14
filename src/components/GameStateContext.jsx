import React, { createContext, useState } from 'react';

export const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
    const getInitialState = () => {
        try {
            const savedState = localStorage.getItem('gameState');
            return savedState ? JSON.parse(savedState) : getDefaultValue();
        } catch (error) {
            console.error("Error reading from localStorage:", error);
            return getDefaultValue();
        }
    };

    const getDefaultValue = () => {
        return {
            currentWord: '',
            currentGuess: '',
            board: [],
            attempts: 0,
            message: '',
            gameOver: false,
            difficulty: 'normal'
        };
    };

    const [gameState, setGameState] = useState(getInitialState);

    return (
        <GameStateContext.Provider value={{ gameState, setGameState }}>
            {children}
        </GameStateContext.Provider>
    );
};
