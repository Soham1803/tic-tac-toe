import { checkWinner } from '../utils/checkWinner';

describe('checkWinner', () => {
  it('should return true for a winning row', () => {

    const gridSize = 5;
    const currentPlayer = 1;

    const rowIndex = 1;
    const colIndex = 2;

    const gridCells = [
      [0, 3, 0, 2, 1],
      [1, 1, 1, 1, 1],
      [3, 2, 3, 0, 0],
      [2, 0, 0, 2, 3],
      [0, 0, 2, 0, 0]
    ];

    expect(checkWinner(rowIndex, colIndex, gridSize, currentPlayer, gridCells)).toBe(true);
  });


  it('should return true for a winning column', () => {

    const gridSize = 4;
    const currentPlayer = 2;
    const rowIndex = 2;
    const colIndex = 0;
    const gridCells = [
      [2, 1, 0, 3],
      [2, 0, 1, 1],
      [2, 3, 0, 0],
      [2, 1, 3, 2]
    ];
    expect(checkWinner(rowIndex, colIndex, gridSize, currentPlayer, gridCells)).toBe(true);
  });

  it('should return true for a winning diagonal', () => {
    const gridSize = 10;
    const currentPlayer = 5;
    const rowIndex = 7;
    const colIndex = 7;
    const gridCells = [
      [5, 0, 9, 0, 1, 0, 0, 0, 6, 0],
      [0, 5, 0, 3, 0, 8, 0, 0, 0, 1],
      [0, 0, 5, 0, 4, 0, 7, 0, 0, 0],
      [6, 0, 0, 5, 0, 0, 0, 3, 9, 0],
      [0, 0, 0, 0, 5, 1, 0, 0, 0, 8],
      [0, 7, 0, 9, 0, 5, 0, 4, 0, 0],
      [0, 0, 8, 0, 0, 0, 5, 6, 2, 0],
      [4, 0, 0, 0, 9, 0, 0, 5, 0, 0],
      [0, 6, 0, 2, 0, 0, 0, 0, 5, 7],
      [0, 4, 0, 8, 0, 0, 0, 0, 0, 5],
    ];

    expect(checkWinner(rowIndex, colIndex, gridSize, currentPlayer, gridCells)).toBe(true);
  });

  it('should return true for a winning anti-diagonal', () => {
    const gridSize = 3;
    const currentPlayer = 2;
    const rowIndex = 0;
    const colIndex = 2;
    const gridCells = [
      [0, 1, 2],
      [3, 2, 0],
      [2, 0, 1],
    ];

    expect(checkWinner(rowIndex, colIndex, gridSize, currentPlayer, gridCells)).toBe(true);
  });
});
