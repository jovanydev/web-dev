const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

//When someone clicks the hambuger menu
navToggle.addEventListener('click', () => {
  //if the nav is closed, open it
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
  } else {
    nav.setAttribute("data-visible", false);
  }

  //if the nav is open, close it
})


