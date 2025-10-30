import { render, screen, fireEvent } from '@testing-library/react'
import GameBoard from '../GameBoard'

describe('GameBoard', () => {
  it('should render game board with correct grid size', () => {
    render(<GameBoard nPlayers={2} gridSize={3} />)
    
    expect(screen.getByText('Game Board')).toBeInTheDocument()
    expect(screen.getByText('Number of Players: 2')).toBeInTheDocument()
    expect(screen.getByText('Grid Size: 3')).toBeInTheDocument()
  })

  it('should handle cell clicks and update current player', () => {
    render(<GameBoard nPlayers={2} gridSize={3} />)
    
    expect(screen.getByText('Chance of player 1')).toBeInTheDocument()
    
    const cells = screen.getAllByRole('button')
    fireEvent.click(cells[0])
    
    expect(screen.getByText('Chance of player 2')).toBeInTheDocument()
  })

  it('should prevent clicking on occupied cells', () => {
    render(<GameBoard nPlayers={2} gridSize={3} />)
    
    const cells = screen.getAllByRole('button')
    fireEvent.click(cells[0]) 
    fireEvent.click(cells[0]) 
    
    
    expect(screen.getByText('Chance of player 2')).toBeInTheDocument()
  })
})

describe('GameBoard Snapshots', () => {
  it('should match 3x3 board snapshot', () => {
    const { container } = render(<GameBoard nPlayers={2} gridSize={3} />)
    expect(container.firstChild).toMatchSnapshot('gameboard-3x3-2players')
  })

  it('should match 5x5 board snapshot', () => {
    const { container } = render(<GameBoard nPlayers={4} gridSize={5} />)
    expect(container.firstChild).toMatchSnapshot('gameboard-5x5-4players')
  })

  it('should match large board snapshot', () => {
    const { container } = render(<GameBoard nPlayers={6} gridSize={8} />)
    expect(container.firstChild).toMatchSnapshot('gameboard-8x8-6players')
  })

  it('should match minimal board snapshot', () => {
    const { container } = render(<GameBoard nPlayers={2} gridSize={3} />)
    expect(container.firstChild).toMatchSnapshot('gameboard-minimal')
  })
})