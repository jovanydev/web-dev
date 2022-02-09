// intialize the count as 0
// listen for clicks on the incremenet button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


let countElem = document.getElementById("count")
let saveElem = document.getElementById("save-el")

let count = 0
countElem.innerText = 0

function increment(){
  count +=1
  countElem.innerText = count
}

function save(){
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
  saveElem.innerText += " " + count + " -"
  count = 0
  countElem.innerText = 0
}