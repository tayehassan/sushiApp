const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const backgroundImages = [
  "img/restaurant1.png",
  "img/breakkie-roll.png",
  "img/pacakes.png",
];

let curBackground = 0;

prev.classList.add("hidden");
next.classList.add("hidden");

const changeBackgroundImage = function () {
  if (curBackground == 0) {
    next.classList.remove("hidden");
    prev.classList.add("hidden");
  } else if (curBackground == 2) {
    prev.classList.remove("hidden");
    next.classList.add("hidden");
  } else {
    next.classList.remove("hidden");
    prev.classList.remove("hidden");
  }

  // console.log(typeof curBackground);

  const curBackgroundImage = (document.querySelector(
    ".home"
  ).style.background = `top left / cover url(${backgroundImages[curBackground]} )no-repeat`);
};

window.addEventListener('load',
changeBackgroundImage)

prev.addEventListener("click", function () {
  curBackground = curBackground - 1;
  changeBackgroundImage();
});
next.addEventListener("click", function () {
  curBackground = curBackground + 1;
  changeBackgroundImage();
});

const menu=function(){document.querySelector('.fa-utensils').style.background='rgb(225,160,122)'
}