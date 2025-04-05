import "./App.css";

function App() {
  return (
    <>
      <h1>2-player-game</h1>
    </>
  );
  
}
Initialize board as 3x3 grid filled with empty values

Set currentPlayer to 'X'

Function displayBoard():
    For each row in board:
        Print the row with separators (e.g. |)

Function isValidMove(row, col):
    Return True if board[row][col] is empty
    Else return False

Function makeMove(row, col, player):
    board[row][col] = player

Function checkWin(player):
    // Check rows
    For each row in board:
        If all cells in row are equal to player:
            Return True

    // Check columns
    For col in 0 to 2:
        If board[0][col] == player and board[1][col] == player and board[2][col] == player:
            Return True

    // Check diagonals
    If board[0][0] == player and board[1][1] == player and board[2][2] == player:
        Return True
    If board[0][2] == player and board[1][1] == player and board[2][0] == player:
        Return True

    Return False

Function checkDraw():
    For each cell in board:
        If cell is empty:
            Return False
    Return True

// Main Game Loop
While True:
    displayBoard()
    Prompt currentPlayer for row and col input

    If isValidMove(row, col):
        makeMove(row, col, currentPlayer)

        If checkWin(currentPlayer):
            displayBoard()
            Print currentPlayer + " wins!"
            Break

        Else if checkDraw():
            displayBoard()
            Print "It's a draw!"
            Break

        Switch currentPlayer to the other player ('X' ↔ 'O')

    Else:
        Print "Invalid move. Try again."


export default App;
