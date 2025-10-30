
export const checkWinner = (
  rowIndex: number, 
  colIndex: number, 
  gridSize: number, 
  currentPlayer: number, 
  gridCells: number[][]
) => {

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
