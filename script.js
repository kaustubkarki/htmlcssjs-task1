let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;
function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;
  //item above active card
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateY(${320 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) `;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(1px)";
    //logic for only 3 items at a time
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  //item below active card
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateY(${-320 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) `;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(1px)";
    //logic for only 3 items at a time
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();

let startY = 0;
let endY = 0;

document.querySelector(".slider").addEventListener("mousedown", (e) => {
  startY = e.clientY; // Capture initial mouse position
});

document.querySelector(".slider").addEventListener("mouseup", (e) => {
  endY = e.clientY; // Capture final mouse position

  // Determine direction based on drag distance
  if (endY - startY > 50) {
    // Dragged downwards
    active = active - 1 >= 0 ? active - 1 : active;
  } else if (startY - endY > 50) {
    // Dragged upwards
    active = active + 1 < items.length ? active + 1 : active;
  }

  loadShow(); // Reapply transformations
});
