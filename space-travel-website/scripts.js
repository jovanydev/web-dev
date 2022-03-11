const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

//When someone clicks the hambuger menu
navToggle.addEventListener('click', () => {
  //if the nav is closed, open it
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else { //if the nav is open, close it
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }

})


