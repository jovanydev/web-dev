const width = 28;
const grid = document.querySelector('.grid');

const scoreDisplay = document.getElementById('score');
let squares = [];
let score = 0;
scoreDisplay.textContent = score;

//28 * 28 = 784
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

const layout = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
  4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
  1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]

//create board
function createBoard() {
  for(let i = 0; i < layout.length; i++) {
    //create a sqaure
    const square = document.createElement('div');
    //put square in grid
    grid.appendChild(square);
    //put square in squares array
    squares.push(square);

    switch (layout[i]) {
      case 0:
        squares[i].classList.add('pac-dot');
        break;
      case 1:
        squares[i].classList.add('wall');
        break;
      case 2:
        squares[i].classList.add('ghost-lair');
        break;
      case 3:
        squares[i].classList.add('power-pellet');
      case 4:
        break;
    }


  }
}

createBoard();

//starting position of pacman
let pacmanCurrentIndex = 490;

squares[pacmanCurrentIndex].classList.add('pacman');

function control(e) {
  squares[pacmanCurrentIndex].classList.remove('pacman');
  switch (e.keyCode){
    case 40:
      console.log('pressed down');
      if (
          !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex + width].classList.contains('wall')
        ) pacmanCurrentIndex += width;
      break;
  
    case 38:
      console.log('pressed up');
      if (
        !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') &&
        pacmanCurrentIndex - width >= 0 &&
        !squares[pacmanCurrentIndex - width].classList.contains('wall')
        ) pacmanCurrentIndex -= width;
      break;

    case 37:
      console.log('pressed left');
      if (
        !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair') &&
        pacmanCurrentIndex % width != 0 &&
        !squares[pacmanCurrentIndex - 1].classList.contains('wall')
        ) pacmanCurrentIndex -= 1;
        if (pacmanCurrentIndex === 364) {
          pacmanCurrentIndex = 391;
        }
  
        
      break;
    case 39:
      console.log('pressed right');
      if (
        !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') &&
        pacmanCurrentIndex % width < width - 1 &&
        !squares[pacmanCurrentIndex + 1].classList.contains('wall')
        ) pacmanCurrentIndex += 1;
        if (pacmanCurrentIndex === 391) {
          pacmanCurrentIndex = 364;
        }
      break;
  }
  squares[pacmanCurrentIndex].classList.add('pacman');
  checkGameOver();
  checkWin();
  pacDotEaten();
  powerPelletEaten();
  scoreDisplay.textContent = score;
}

document.addEventListener('keyup', control);

function pacDotEaten() {
  if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
    score++;
    squares[pacmanCurrentIndex].classList.remove('pac-dot');
  }
}

function powerPelletEaten() {
  //if square pacman is in contains a power pellet
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
    score += 10;

    ghosts.forEach(ghost => ghost.isScared = true);

    setTimeout(unScaredGhosts, 10000);

    squares[pacmanCurrentIndex].classList.remove('power-pellet');
  }
  //use setTimeout to unscared ghosts after 10 seconds
}

function unScaredGhosts() {
  ghosts.forEach(ghost => ghost.isScared = false);
}

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

const ghosts = [
  new Ghost('blinky', 348, 250),
  new Ghost('pinky', 376, 400),
  new Ghost('inky', 351, 300),
  new Ghost('clyde', 379, 500)
];



//Drawing ghosts on grid
ghosts.forEach(ghost => { 
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].classList.add('ghost');
});

ghosts.forEach(ghost => moveGhost(ghost));

function moveGhost(ghost){
  const directions = [-1, +1, -width, width];
  let direction = directions[Math.floor(Math.random() * directions.length)]

  ghost.timerId = setInterval(function() {
    if(
      !squares[ghost.currentIndex + direction].classList.contains('wall') &&
      !squares[ghost.currentIndex + direction].classList.contains('ghost')
    ) {
      
        // //remove any ghost
        squares[ghost.currentIndex].classList.remove(ghost.className);
        squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost');
        // //add direction to current Index
        ghost.currentIndex += direction;
    
        // //add ghost class
        squares[ghost.currentIndex].classList.add(ghost.className);
        squares[ghost.currentIndex].classList.add('ghost');
      
    } else direction = directions[Math.floor(Math.random() * directions.length)]

    if(ghost.isScared) {
      squares[ghost.currentIndex].classList.add('scared-ghost');
    }

    if(ghost.isScared && pacmanCurrentIndex === ghost.currentIndex) {
      squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');

      ghost.currentIndex = ghost.startIndex;

      score += 100;

      squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
    }
    //readd classnames of ghost.className and ghost to the ghosts new position

  }, ghost.speed);
}

//check for game over
function checkGameOver() {
  //if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost
  if (
    squares[pacmanCurrentIndex].classList.contains('ghost') &&
    !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
    ) {
      
      ghosts.forEach(ghost => clearInterval(ghost.timerId));

      document.removeEventListener('keyup', control);

      scoreDisplay.innerHTML = 'YOU LOSE';
    }
}

function checkWin(){
  if (score === 274) {
    //stop each ghost
    ghosts.forEach(ghost => clearInterval(ghost.timerId));

    //remove the eventListener for the control function
    document.removeEventListener('keyup', control);

    //tell user you won
    scoreDisplay.innerHTML = 'You Won!';
  }
}