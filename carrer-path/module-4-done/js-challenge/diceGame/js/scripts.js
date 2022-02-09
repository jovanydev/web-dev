//Variables for game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

//Variables store refereces to DOM nodes
const message = document.getElementById("message");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const restBtn = document.getElementById("resetBtn");
const rollBtn = document.getElementById("rollBtn");

function showDisplayButton() {
  rollBtn.style.display = "none";
  restBtn.style.display = "block";
}

// Rool Dice button event listener
rollBtn.addEventListener("click", function() {
  const randomDice = Math.floor(Math.random() * 6) + 1;

  if(player1Turn) {
    player1Dice.textContent = randomDice;
    player1Score += randomDice;
    player2Dice.classList.add("active");
    player1Dice.classList.remove("active");
    message.innerHTML = "Player 2 Turn";
    player1Scoreboard.textContent = player1Score;
  } else {
    player2Dice.textContent = randomDice;
    player2Score += randomDice;
    player1Dice.classList.add("active");
    player2Dice.classList.remove("active");
    message.textContent = "Player 1 Turn";
    player2Scoreboard.textContent = player2Score;

  }

  if (player1Score > 20) {
      message.textContent = "Player 1 has won!";
      showDisplayButton()
    } else if (player2Score > 20) {
      message.textContent = "player 2 has won!";
      showDisplayButton()
    }

    

  player1Turn = !player1Turn;
});

restBtn.addEventListener("click", function() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.textContent = "Player 1 Turn";

  rollBtn.style.display = "block";
  restBtn.style.display = "none";

  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
})