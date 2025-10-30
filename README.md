# 🎮 Tic-Tac-Toe Game - Interactive Multiplayer Grid Game

A modern, customizable **Tic-Tac-Toe game** built with **React**, **TypeScript**, and **Vite**. This interactive web application allows players to create custom game boards with variable grid sizes and support for multiple players.

## 🚀 Features

- 🎯 **Customizable Grid Size**: Choose grid dimensions from 3x3 up to 10x10
- 👥 **Multiplayer Support**: Play with 2-6 players in a single game
- 🎨 **Color-Coded Players**: Each player gets a unique color for easy identification
- ✅ **Smart Win Detection**: Automatic winner detection for rows, columns, and diagonals
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🧪 **Comprehensive Testing**: Unit tests, integration tests, and snapshot tests

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with custom grid layouts
- **Testing**: Vitest + Testing Library + Snapshot Testing
- **Linting**: ESLint
- **Icons**: Lucide React
- **CI/CD**: GitHub Actions

## 📦 Installation & Setup

### Prerequisites
- Node.js (18.x or 20.x)
- pnpm (recommended) or npm

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tic-tac-toe-game
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🎮 How to Play

1. **Set Game Parameters**:
   - Enter number of players (2-6)
   - Choose grid size (3x3 to 10x10)

2. **Start Playing**:
   - Players take turns clicking on empty cells
   - Each player is assigned a unique color
   - First player to get a complete row, column, or diagonal wins!

3. **Win Conditions**:
   - Complete horizontal line
   - Complete vertical line
   - Complete diagonal line (main or anti-diagonal)

## 🧪 Testing Strategy

Our comprehensive testing approach includes:

### **Unit Tests**
- ✅ **Utility Functions**: `checkWinner` logic with edge cases
- ✅ **Component Logic**: Form validation, player cycling, grid initialization

### **Integration Tests**
- ✅ **User Interactions**: Form submissions, game flow, cell clicking
- ✅ **Multiplayer Functionality**: Simultaneous moves, turn-taking

### **End-to-End Tests**
- ✅ **Complete Game Sessions**: From setup to win/loss detection
- ✅ **Responsive Design**: Layout and functionality on different screen sizes

Enjoy the game! May the best strategist win! 🏆
