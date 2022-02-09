//4 variables to contain elements
const $setupDiv = document.getElementById('setup');
const $punchLineDiv = document.getElementById('punchline');
const $punchLineBtn = document.getElementById('punchlineBtn');
const $newJokeBtn = document.getElementById('newJokeBtn');
let punchline;

$newJokeBtn.addEventListener("click", joke);
$punchLineBtn.addEventListener('click', getPunchline);

function getPunchline() {
  const inputPunchLine = document.createElement('p');
  inputPunchLine.textContent = punchline;
  $punchLineDiv.appendChild(inputPunchLine);
  $punchLineDiv.classList.add('bubble');

  $punchLineBtn.classList.toggle('hidden');
  $newJokeBtn.classList.toggle('hidden');
}

//Async-await for getting jokes from https://official-joke-api.appspot.com/jokes/programming/random
async function joke() {
  const jokePromise = await fetch
  ('https://official-joke-api.appspot.com/jokes/programming/random');
  const joke = await jokePromise.json();

  //Setup joke and instert into setupDiv
  const inputJoke = document.createElement('p');
  inputJoke.innerHTML = joke[0].setup;
  $setupDiv.appendChild(inputJoke);

  punchline = joke[0].punchline;

  $punchLineDiv.innerHTML = "";
  $punchLineDiv.classList.remove("bubble");

  $punchLineBtn.classList.toggle('hidden');
  $newJokeBtn.classList.toggle('hidden');
}

joke();