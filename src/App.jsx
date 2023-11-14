import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GamePage from "./components/GamePage";
import RulesPage from "./components/RulesPage";
import DifficultySelectPage from "./components/DifficultySelectPage";
import { GameStateProvider } from './components/GameStateContext';


function App() {
  return (
    <GameStateProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/difficulty-select" element={<DifficultySelectPage />} />
        <Route path="/game/:difficulty" element={<GamePage />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </Router>
    </GameStateProvider>
  );
}

export default App;