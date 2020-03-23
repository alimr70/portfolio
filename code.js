/* -------------------------------------------------------------------------- */
/*                         Menu Open & Close Handlers                         */
/* -------------------------------------------------------------------------- */
const mBtn = document.getElementById("menu");
const cMBtn = document.getElementById("closeMenu");
const mItem = document.getElementById("menuItems");

function mOpen() {
  mBtn.setAttribute('style', 'display:none');
  cMBtn.setAttribute('style', 'display:block');
  mItem.setAttribute('style', 'display:flex');
}

function mClose() {
  mBtn.setAttribute('style', 'display:block');
  cMBtn.setAttribute('style', 'display:none');
  mItem.setAttribute('style', 'display:none');
}

mBtn.addEventListener("click", mOpen);

cMBtn.addEventListener("click", mClose);

/* -------------------------------------------------------------------------- */
/*                            NavBar scroll handler                           */
/* -------------------------------------------------------------------------- */
const links = document.getElementsByClassName('scrolls');
const main = document.querySelector('.heroBg');

function scrolling() {
  if (scrollY > 5) {
    links[0].style.padding = "0.5em 2em 0.5em 2em";
    links[1].style.padding = "0.5em 2em 0.5em 2em";
    links[2].style.padding = "0.5em 2em 0.5em 2em";
    links[3].style.padding = "0.5em 2em 0.5em 2em";
    links[4].style.padding = "0.5em 2em 0.5em 2em";
    links[5].style.padding = "0.5em 2em 0.5em 2em";
    links[6].style.padding = "0.5em 2em 0.5em 2em";
  } else {
    links[0].style.padding = "2em";
    links[1].style.padding = "2em";
    links[2].style.padding = "2em";
    links[3].style.padding = "2em";
    links[4].style.padding = "2em";
    links[5].style.padding = "2em";
    links[6].style.padding = "2em";
  };
}

document.addEventListener('scroll', scrolling);