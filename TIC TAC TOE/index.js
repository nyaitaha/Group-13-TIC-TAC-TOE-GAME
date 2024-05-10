let scoreX = 5
let scoreO = 5
let result = document.querySelector('p')

if (scoreX = scoreO){
    result.textContent = "Game ended in a draw"
}else if(scoreX < scoreO){
     result.textContent = "Player O wins!"
}else {
    result.textContent= "Player X wins!"
    }