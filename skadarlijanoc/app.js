var menu = document.querySelector(".hamburger-menu");
var hamburger = document.querySelector(".header-wrap");

menu.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});

const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".arrow-left");
const next = document.querySelector(".arrow-right");
const indicator = document.querySelector(".wallpaper-counter").children;
const dot = document.querySelector(".dot");
let index = 0;

prev.addEventListener("click", () => {
  previousSlide();
  updateCircleIndicator();
  resetPlay();
});

next.addEventListener("click", () => {
  nextSlide();
  updateCircleIndicator();
  resetPlay();
});

const updateCircleIndicator = () => {
  for (let i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove("active-dot");
  }
  indicator[index].classList.add("active-dot");
};

const previousSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }

  changeSlide();
};

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
  } else {
    index++;
  }

  changeSlide();
};

const changeSlide = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-image");
  }
  slides[index].classList.add("active-image");
};

const resetPlay = () => {
  clearInterval(timer);
  timer = setInterval(autoPlay, 10000);
};

const autoPlay = () => {
  nextSlide();
  updateCircleIndicator();
};

let timer = setInterval(autoPlay, 10000);

// transition

const header = document.querySelector("header");

const bgChanger = () => {
  if (this.scrollY > this.innerHeight / 1.5) {
    header.classList.add("active-header");

    resetPlay();
  } else {
    header.classList.remove("active-header");
  }
};

window.addEventListener("scroll", bgChanger);
