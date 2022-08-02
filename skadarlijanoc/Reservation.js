var modal = document.querySelector(".bg-modal");
function openModal() {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
}

// Get the button that opens the modal
var btn = document.getElementById("res");

// Get the <span> element that closes the modal
var close = document.getElementById("close");

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.height = "auto";
}

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }
};
