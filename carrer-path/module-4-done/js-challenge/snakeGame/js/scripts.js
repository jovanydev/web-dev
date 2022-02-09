const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
const scoreDisplay = document.querySelector("#score");
const squares = [];
let currentSnake = [2, 1, 0];
const width = 10;
let direction = 1;
let score = 0;
let intervalTime = 500;
const speed = .9;
let timerId = 0;
let appleIndex = 0;

function createGrid() {
  //create 100 element for loop
  console.log(grid);
  for (let i = 0; i < 100; i++) {
    //Create Element
    const square = document.createElement('div');
    //add stylying to the element
    square.classList.add("square");
    //put the element into our grid
    grid.appendChild(square);
    //push it into a new squares arry 
    squares.push(square);
  }

}

createGrid();
currentSnake.forEach(index => squares[index].classList.add('snake'));

function startGame() {
  //remove the snake
  currentSnake.forEach(value => squares[value].classList.remove('snake'));
  //remove apple
  squares[appleIndex].classList.remove('apple');
  currentSnake = [2, 1, 0];
  direction = 1;
  //Readd the score to browser
  score = 0;
  scoreDisplay.textContent = score;
  intervalTime = 700;
  generateApples();
  //readd the class of snake to our new currentSanke
  currentSnake.forEach(index => squares[index].classList.add('snake'));

  timerId = setInterval(move, intervalTime);
}

function move() {
  if (
    (currentSnake[0] + width >= width*width && direction === width) || //if snake has hit bottom
    (currentSnake[0] % width === width-1 && direction === 1) || //if snake has hit right wall
    (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
    (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
    squares[currentSnake[0] + direction].classList.contains('snake')
){
  return clearInterval(timerId)
}


  //remove last element from our currentSnake array
  const tail = currentSnake.pop();
  //remove styling from last element
  squares[tail].classList.remove('snake');
  //add sequare in direction we are heading
  currentSnake.unshift(currentSnake[0] + direction)

  //deal with snake head getting the apple
  if(squares[currentSnake[0]].classList.contains('apple')) {
    //remove the class of apple
    squares[currentSnake[0]].classList.remove('apple');
    //grow our snake by adding class of snake to it
    squares[tail].classList.add('snake')
    //grow our snake array
    currentSnake.push(tail);
    //generate a new apple
    generateApples();
    //add one to the score
    score++;
    //Display score
    scoreDisplay.textContent = score;
    //speed up our snake
    clearInterval(timerId);
    intervalTime = intervalTime * speed;
    timerId = setInterval(move, intervalTime);
  }

  //add styling so we can see it
  squares[currentSnake[0]].classList.add('snake');
}



function generateApples() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while( squares[appleIndex].classList.contains('snake'))
  squares[appleIndex].classList.add('apple');
}

generateApples();

function control(e) {
  if (e.keyCode===39) {
    direction = 1;
  } else if (e.keyCode === 38){
    direction = -width;
  } else if (e.keyCode === 37) {
    direction = -1;
  } else if (e.keyCode === 40) {
    direction = width;
  } else {
    console.log('other');
  }
}

document.addEventListener('keyup', control);

startBtn.addEventListener("click", startGame);