"use strict"

//emjiContainer variable
const emojiContainer = document.getElementById("emojiContainer");
//List of current emojies
const myEmojis = ["👨‍💻", "⛷", "🍲"];
// Form input
const emojiInput = document.getElementById("emoji-input");
//EmojiBtn 
const addEmojiBtn = document.getElementById("push-btn");
const addBeginningBtn = document.getElementById("unshift-btn");

const removeLast = document.getElementById("pop-btn");
const removeFirst = document.getElementById("shift-btn");

renderEmoji();

addEmojiBtn.addEventListener("click", function() {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = "";
    
    renderEmoji();
  }
});

addBeginningBtn.addEventListener("click", function() {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    renderEmoji();
  }
});

removeLast.addEventListener("click", function() {
  myEmojis.pop();
  renderEmoji();
});

removeFirst.addEventListener("click", function() {
  myEmojis.shift();
  renderEmoji();
});

function renderEmoji() {
  emojiContainer.innerHTML = "";
  myEmojis.forEach((iEmoji) => {
    const spanEl = document.createElement("span");
    spanEl.textContent = iEmoji;
    emojiContainer.append(spanEl);
  });
}