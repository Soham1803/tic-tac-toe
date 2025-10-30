import { render, fireEvent, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import GameBoard from '../GameBoard'

describe('Game Progress Snapshots', () => {
  it('should match game with some moves played', () => {
    const { container } = render(<GameBoard nPlayers={2} gridSize={3} />)
    
    // Make some moves
    const cells = screen.getAllByRole('button')
    fireEvent.click(cells[0]) 
    fireEvent.click(cells[1]) 
    fireEvent.click(cells[4]) 
    
    expect(container.firstChild).toMatchSnapshot('game-in-progress')
  })

  it('should match winning state snapshot', () => {
    const { container } = render(<GameBoard nPlayers={2} gridSize={3} />)
    
    // Create winning condition 
    const cells = screen.getAllByRole('button')
    fireEvent.click(cells[0]) // Player 1
    fireEvent.click(cells[3]) // Player 2
    fireEvent.click(cells[1]) // Player 1
    fireEvent.click(cells[4]) // Player 2
    fireEvent.click(cells[2]) // Player 1 wins
    
    expect(container.firstChild).toMatchSnapshot('game-won')
  })
})