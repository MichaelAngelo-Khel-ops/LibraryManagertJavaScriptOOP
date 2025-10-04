// this file is for CSS animation. i still cant do CSS animation in CSS so ill just used what i know in JS to do my animations

// check box
const checkBox = select("#toggle");
const animationBooks = select("#inputContainerBooks");
const eBooks = select("#inputContainerEBooks");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    // true for books
    animationBooks.style.display = "none";
    eBooks.style.display = "flex";
  } else {
    // false for E books
    eBooks.style.display = "none";
    animationBooks.style.display = "flex";
  }
});
