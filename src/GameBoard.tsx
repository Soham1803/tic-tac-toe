import React from 'react';

const playerColors = [
  "#3498db", // blue
  "#f1c40f", // yellow
  "#e67e22", // orange
  "#9b59b6", // purple
  "#00bcd4", // cyan
  "#16a085", // teal
  "#e91e63", // magenta
  "#5dade2", // sky blue
  "#3f51b5", // indigo
  "#7f8c8d", // gray
];

type GameBoardProps = {
  nPlayers: number,
  gridSize: number
};

export default function GameBoard({nPlayers, gridSize}: GameBoardProps) {
  
  const [gridCells, setGridCells] = React.useState(Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => 0)));
  
  const [currentPlayer, setCurrentPlayer] = React.useState(1);

  const [mutatedCells, setMutatedCells] = React.useState(0);

  const [winner, setWinner] = React.useState(0);
  const [isDraw, setIsDraw] = React.useState(false);

  const [rowInx, setRowInx] = React.useState(-1);
  const [colInx, setColInx] = React.useState(-1);


  React.useEffect(() => {
    if(rowInx === -1 || colInx === -1) return;

    // console.log("Checking winner for player ", currentPlayer);

    if(checkWinner(rowInx, colInx)) {
      setWinner(currentPlayer);
    }


    if(mutatedCells === gridSize * gridSize && winner === 0) {
      setIsDraw(true);
      return;
    }

    setCurrentPlayer(prev => prev == nPlayers ? 1 : prev + 1);

  }, [gridCells, mutatedCells]);

  const handleCellClick = (rowIndex: number, colIndex: number) => {

    if(gridCells[rowIndex][colIndex] !== 0) return; // Cell already occupied

    setRowInx(rowIndex);
    setColInx(colIndex);

    setGridCells(prevGrid => { // Improvement suggested by Chat GPT
      const newGrid = prevGrid.map(row => [...row]);
      newGrid[rowIndex][colIndex] = currentPlayer;
      return newGrid;
    });

    setMutatedCells(prev => prev + 1);
  }

  const checkWinner = (rowIndex: number, colIndex: number) => {

    if(gridCells[rowIndex][colIndex] !== currentPlayer) {
      // console.log("Cell not updated yet!");
      return;
    }

    let counter = 0;

    for(let col = 0; col < gridSize; col++) {
      if(gridCells[rowIndex][col] !== currentPlayer) {
        break;
      }
      counter++;
    }

    if(counter === gridSize) return true;

   
    counter = 0;

    for(let row = 0; row < gridSize; row++) {
      if(gridCells[row][colIndex] !== currentPlayer) {
        break;
      }
      counter++;
    }

    if(counter === gridSize) return true;

    counter = 0;

    if(rowIndex === colIndex) {

      for(let i = 0; i < gridSize; i++) {
        if(gridCells[i][i] !== currentPlayer) {
          break;
        }
        counter++;
      }
    }

    if(counter === gridSize) return true;

    counter = 0;

    if(rowIndex + colIndex === gridSize - 1){
      for(let i = 0; i < gridSize; i++) {
        if(gridCells[i][gridSize - 1 - i] !== currentPlayer) {
          break;
        }
        counter++;
      }
    }

    if(counter === gridSize) return true

    return false;
  }

  return (
    <div>
      <h3>Game Board</h3>
      <p>Number of Players: {nPlayers}</p>
      <p>Grid Size: {gridSize}</p>

      { winner > 0 
        ? <h2>Player {winner} Wins!</h2>
        : isDraw 
        ? <h2>It's a Draw!</h2>
        : (
          <div>
            <p>Chance of player {currentPlayer}</p>

            <div className="game-board">
              {gridCells.map((row, rowIndex) => (
                <div key={rowIndex} className="board-row">
                  {row.map((cell, colIndex) => (
                    <button
                      key={colIndex}
                      style={{backgroundColor: cell !== 0 ? playerColors[cell - 1] : "green"}}
                      onClick={() => handleCellClick(rowIndex, colIndex)} 
                      className={"board-cell"}
                    >
                      <span>{cell}</span>
                    </button>
                  ))}
                </div>
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  );
}
