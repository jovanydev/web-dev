let firstCard = 0
let secondCard = 0
let cards = []
let hasBlackJack = false
let isAlive = false

let sum = firstCard + secondCard

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
  name: "Per",
  chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



function startGame() {
  isAlive = true
  firstCard = getRandomCard()
  secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  hasBlackJack = false
  

  renderGame()
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: "

  for(let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " " + cards[i]
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  
  messageEl.textContent = message;
}

function getRandomCard() {
  let myCard = Math.floor(Math.random() * 13) + 1

  if (myCard === 1) {
    return 1
  } else if (myCard > 10) {
    return 10
  }

  return myCard

}

function newCard() {
  if(isAlive && !hasBlackJack) {
    let card = getRandomCard()
    sum += card
  
    cards.push(card)
  
    renderGame()
  }
  
}