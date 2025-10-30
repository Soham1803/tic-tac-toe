import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('should show InitForm initially', () => {
    render(<App />);
    expect(screen.getByLabelText(/number of Players/i)).toBeInTheDocument();
  })

  it('should show alert for invalid inputs', () => {
    const alertSpy = vi.spyOn(window, 'alert');
    render(<App />);
    
    fireEvent.click(screen.getByRole('button', { name: /start game/i }));
    expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining('valid numbers'));
    
    alertSpy.mockRestore();
  })

  it('should start game with valid inputs', () => {
    render(<App />)
    
    fireEvent.change(screen.getByPlaceholderText(/number of players/i), { target: { value: '2' } });
    fireEvent.change(screen.getByPlaceholderText(/grid size/i), { target: { value: '3' } });
    fireEvent.click(screen.getByRole('button', { name: /start game/i }));
    
    expect(screen.getByText('Game Board')).toBeInTheDocument();
  })
})

describe('App Snapshots', () => {

  it('should match initial state snapshot', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot('app-initial-state')
  })

  it('should match game started state snapshot', () => {
    const { container } = render(<App />)
    
    // Fill valid inputs and start game
    fireEvent.change(screen.getByLabelText(/number of Players/i), { target: { value: '2' } })
    fireEvent.change(screen.getByLabelText(/grid size/i), { target: { value: '3' } })
    fireEvent.click(screen.getByRole('button', { name: /start game/i }))
    
    expect(container.firstChild).toMatchSnapshot('app-game-started')
  })
})