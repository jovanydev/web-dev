// 'use strict'
const btnOpenContact = document.getElementById("open-modal");
const btnCloseContact = document.getElementById("close-modal");
const popUp = document.getElementById("overlay");

btnOpenContact.addEventListener("click", function() {
  popUp.style.display = "block";
});

btnCloseContact.addEventListener("click", function() {
  popUp.style.display = "none";
});