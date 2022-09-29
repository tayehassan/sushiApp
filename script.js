const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const backgroundImages = [
  "img/restaurant1.png",
  "img/breakkie-roll.png",
  "img/pacakes.png",
];

prev.classList.add("hidden");
next.classList.add("hidden");

const changeBackgroundImage = function (curBackground) {
    
  if (curBackground === 0) {
    next.classList.remove("hidden");
  } else if (curBackground === 2) {
    prev.classList.remove("hidden");
  } else {
    next.classList.remove("hidden");
    prev.classList.remove("hidden");
  }

  const curBackgroundImage = (document.querySelector(
    ".home"
  ).style.background = `top left / cover url(${backgroundImages[curBackground]} )no-repeat`);
};

changeBackgroundImage(2);
