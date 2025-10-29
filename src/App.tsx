import { useState } from 'react'
import './App.css'
import InitForm from './InitForm';
import GameBoard from './GameBoard';

function App() {
  const [nPlayer, setNPlayers] = useState(0);
  const [gridSize, setGridSize] = useState(0);

  const [gameStarted, setGameStarted] = useState(false);

  const handleGameStart = () => {

    if(nPlayer <= 1 || gridSize <= 1 || gridSize > 10) {
      alert("Number of players and grid size should be valid numbers, greater than 1 and less than 10!")
    } else if(nPlayer > (gridSize + 1)) {
      alert("Invalid game, number of players it too large!")
    } else {
      setGameStarted(true);
    } 
  };


  return (
    <div>
      {
        gameStarted ? 
          <GameBoard nPlayers={nPlayer} gridSize={gridSize} />
        : <InitForm setNPlayers={setNPlayers} setGridSize={setGridSize} onGameStart={handleGameStart} />
      }
    </div>
  )
}

export default App
