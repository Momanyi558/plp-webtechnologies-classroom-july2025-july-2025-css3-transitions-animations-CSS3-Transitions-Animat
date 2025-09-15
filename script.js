// Global variable
let animationCount = 0;

// Function with parameter & return
function calculateArea(width, height) {
  return width * height;
}

// Local vs Global scope demo
function updateAnimationCount() {
  let localCount = ++animationCount; // uses global variable
  console.log("Animations triggered:", localCount);
}

// Reusable function to add class for animation
function triggerAnimation(elementId) {
  let element = document.getElementById(elementId);
  element.classList.add("animate");

  // Remove animation class after 2s so it can be reused
  setTimeout(() => {
    element.classList.remove("animate");
  }, 2000);

  updateAnimationCount();
}
