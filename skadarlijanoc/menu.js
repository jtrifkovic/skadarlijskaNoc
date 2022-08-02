var menu = document.querySelector(".hamburger-menu");
var headerWrap = document.querySelector(".header-container");

menu.addEventListener("click", () => {
  headerWrap.classList.toggle("active");
});
