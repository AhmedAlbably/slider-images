let images = document.querySelectorAll("img");
let rightIcon = document.querySelector(".right");
let leftIcon = document.querySelector(".left");

// let index = 0;

// rightIcon.addEventListener("click", () => {
//   if (index !== images.length - 1) {
//     index++;
//     slider();
//   }
// });

// leftIcon.addEventListener("click", () => {
//   if (index !== 0) {
//     index--;
//     slider();
//   }
// });

// function slider() {
//   for (let i = 0; i < images.length; i++) {
//     images[i].classList.remove("active");
//   }
//   images[index].classList.add("active");
//   console.log(index);
// }
// slider();

rightIcon.addEventListener("click", () => {
  slider("right");
});

leftIcon.addEventListener("click", () => {
  slider("left");
});

function slider(c) {
  let index;
  if (c === "right") {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.contains("active") ? (index = i) : "";
    }
    if (index !== images.length - 1) {
      for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
      }
      images[index + 1].classList.add("active");
    }
  } else {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.contains("active") ? (index = i) : "";
    }
    if (index !== 0) {
      for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
      }
      images[index - 1].classList.add("active");
    }
  }
}
