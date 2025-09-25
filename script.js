// ---------------- Global Variable ----------------
let globalMultiplier = 2;

// ---------------- Functions ----------------
function multiplyNumbers(a, b) {
  const localFactor = 1; // local scope variable
  return (a * b * globalMultiplier) + localFactor;
}

function sum(a, b) {
  return a + b;
}

// ---------------- Functions Demo ----------------
function runMultiplyDemo() {
  const a = Number(document.getElementById('mult-a').value);
  const b = Number(document.getElementById('mult-b').value);
  const result = multiplyNumbers(a, b);
  document.getElementById('multiply-output').textContent =
    `${a} × ${b} × ${globalMultiplier} + 1 = ${result}`;
}

function updateGlobalMultiplier() {
  const val = Number(document.getElementById('global-mult').value);
  if (!Number.isFinite(val)) return;
  globalMultiplier = val;
  document.getElementById('scope-output').textContent =
    `Global multiplier set to: ${globalMultiplier}`;
}

function showSum(a, b) {
  const result = sum(a, b);
  document.getElementById('sum-output').textContent = `Sum: ${result}`;
}

// ---------------- Animations & Interactions ----------------
function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}

function bounceBox(boxElement) {
  boxElement.classList.remove('bounce');
  void boxElement.offsetWidth; // restart animation
  boxElement.classList.add('bounce');
}

function toggleModal(show = true) {
  const modal = document.getElementById('demo-modal');
  modal.setAttribute('aria-hidden', String(!show));
}

function toggleSpinner(show = true) {
  const spinner = document.getElementById('demo-spinner');
  spinner.setAttribute('aria-hidden', String(!show));
}

// ---------------- Contact Form ----------------
function handleSubmit(e) {
  e.preventDefault();
  toggleSpinner(true);
  setTimeout(() => {
    toggleSpinner(false);
    document.getElementById('form-response').textContent =
      "✅ Thank you! Your message has been sent.";
    e.target.reset();
  }, 1500);
}



