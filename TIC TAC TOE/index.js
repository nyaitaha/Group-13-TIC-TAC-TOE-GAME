const startBtn = document.getElementById('start-btn');
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const scoreBoard = document.getElementById('score-board');
const xScore = document.getElementById('x-score');
const oScore = document.getElementById('o-score');
let currentPlayer = 'X';
let xWins = 0;
let oWins = 0;

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  board.style.display = 'block';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.addEventListener('click', handleCellClick);
  });
});

function handleCellClick(e) {
  e.target.textContent = currentPlayer;
  currentPlayer = currentPlayer === 'X'? 'O' : 'X';
  checkForWin();
}

function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];
    const cell1 = cells[combination[0]].textContent;
    const cell2 = cells[combination[1]].textContent;
    const cell3 = cells[combination[2]].textContent;

    if (cell1 === cell2 && cell2 === cell3 && cell1!== '') {
      if (cell1 === 'X') {
        xWins++;
        xScore.textContent = `X: ${xWins}`;
      } else {
        oWins++;
        oScore.textContent = `O: ${oWins}`;
      }
      resetBoard();
      break;
    }
  }
}

function resetBoard() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
}

scoreBoard.style.display = 'block';
xScore.textContent = `X: ${xWins}`;
oScore.textContent = `O: ${oWins}`;