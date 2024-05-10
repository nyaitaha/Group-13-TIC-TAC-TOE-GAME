const startEl = document.getElementById("start-el");
const container = document.getElementById("container");
const startBtn = document.getElementById("start-btn");
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;

startBtn.addEventListener("click", function(){
  if (!gameActive) {
    startEl.style.display = 'none';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gridGap = '10px';
    container.style.width = '300px'; 
    container.style.height = '300px';
    container.style.margin = 'auto';
    gameActive = true;
  }
});

cells.forEach(cell => {
  cell.addEventListener('click', function() {
    const cellIndex = parseInt(cell.dataset.cellIndex);
    if (gameActive && gameBoard[cellIndex] === '') {
      cell.innerText = currentPlayer;
      gameBoard[cellIndex] = currentPlayer;
      if (checkWin()) {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();
      } else if (checkDraw()) {
        alert("It's a draw!");
        resetGame();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});

function checkWin() {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
  ];

  for (let combination of winCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return gameBoard.every(cell => cell !== '');
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => {
    cell.innerText = '';
  });
  currentPlayer = 'X';
}
