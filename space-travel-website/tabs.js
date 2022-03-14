const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]')

let countIndex = 0;

tabList.addEventListener('keydown', changeTabIndex)

function changeTabIndex(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  console.log(countIndex);

  //Change the tabindex of the current tab to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[countIndex].setAttribute("tabindex", -1);
  }
  //if the right key is pushed, move to the next tab on the right

  if (e.keyCode === keydownRight) {
    countIndex++;
    if (countIndex >= tabs.length) {
      countIndex = 0;
    }
  }

  //if the left key is pushed, move to the next tab on the left
  if(e.keyCode == keydownLeft) {
    countIndex--;
    if (countIndex < 0) {
      countIndex = tabs.length - 1;
    }
  }

  tabs[countIndex].setAttribute("tabindex", 1)
  tabs[countIndex].focus();
}