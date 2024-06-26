const startEl = document.getElementById("start-el");
const container = document.getElementById("container");
const startBtn = document.getElementById("start-btn");
const cells = document.querySelectorAll('.grid .cell');
const xScore = document.getElementById("x-score");
const oScore = document.getElementById("o-score");
const resetBtn = document.getElementById("reset-btn");

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;
let xWins = 0; 
let oWins = 0; 

startBtn.addEventListener("click", function(){
  if (!gameActive) {
    startEl.style.display = 'none';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gridGap = '10px';
    container.style.width = '300px'; 
    container.style.height = '300px';
    container.style.margin = 'auto';
   
  }
  gameActive = true;
});

cells.forEach((cell, cellIndex) => {
  cell.addEventListener('click', function() {
    if (gameActive && gameBoard[cellIndex] === '') {
      cell.innerText = currentPlayer;
      gameBoard[cellIndex] = currentPlayer;
      if (checkWin()) {
        alert(`Player ${currentPlayer} wins!`);
        if (currentPlayer === 'X') {
          xWins++; 
          xScore.textContent = `X: ${xWins}`; 
        } else {
          oWins++; 
          oScore.textContent = `O: ${oWins}`; 
        }
       changeScore();
      } else if (checkDraw()) {
        alert("It's a draw!");
       changeScore();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});

function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  return winConditions.some(combination => {
    const [a, b, c] = combination;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
  });
}

function checkDraw() {
  return !gameBoard.includes('');
}

function changeScore(){
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.innerText = '');
  currentPlayer = 'X';
  xScore += xScore;
  oScore += oScore;

}
function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.innerText = '');
  currentPlayer = 'X';
  xWins = 0; 
  oWins = 0; 
  gameActive = false;``
}

resetBtn.addEventListener("click", function() {
    resetGame();
  });