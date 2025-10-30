import { render, screen, fireEvent } from '@testing-library/react'
import InitForm from '../InitForm'

describe('InitForm', () => {
    
  const mockSetNPlayers = vi.fn();
  const mockSetGridSize = vi.fn();
  const mockOnGameStart = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render form elements correctly', () => {
    render(<InitForm setNPlayers={mockSetNPlayers} setGridSize={mockSetGridSize} onGameStart={mockOnGameStart} />);
    
    expect(screen.getByLabelText(/number of Players/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/grid size/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start game/i })).toBeInTheDocument();
  });

  it('should call setNPlayers when player input changes', () => {
    render(<InitForm setNPlayers={mockSetNPlayers} setGridSize={mockSetGridSize} onGameStart={mockOnGameStart} />);
    
    const playerInput = screen.getByPlaceholderText(/number of players/i);
    fireEvent.change(playerInput, { target: { value: '3' } });
    
    expect(mockSetNPlayers).toHaveBeenCalledWith(3);
  })

  it('should call setGridSize when grid input changes', () => {
    render(<InitForm setNPlayers={mockSetNPlayers} setGridSize={mockSetGridSize} onGameStart={mockOnGameStart} />);
    
    const gridInput = screen.getByPlaceholderText(/grid size/i);
    fireEvent.change(gridInput, { target: { value: '5' } });
    
    expect(mockSetGridSize).toHaveBeenCalledWith(5);
  })
})


describe('InitForm Snapshots', () => {
  const mockProps = {
    setNPlayers: vi.fn(),
    setGridSize: vi.fn(),
    onGameStart: vi.fn()
  }

  it('should match initial render snapshot', () => {
    const { container } = render(<InitForm {...mockProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should match snapshot with form validation state', () => {
    const { container } = render(<InitForm {...mockProps} />)
    expect(container.firstChild).toMatchSnapshot('form-initial-state')
  })
})