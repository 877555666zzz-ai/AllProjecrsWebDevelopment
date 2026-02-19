
// TASK 1: Change Shape on Click
let isRectangle = false;
shapeBtn.addEventListener("click", () => {
  isRectangle = !isRectangle;
  shapeBox.classList.toggle("rectangle", isRectangle);
});

// TASK 2: Show / Hide block
toggleBlockBtn.addEventListener("click", () => {
  hideBlock.classList.toggle("hidden");
});

// TASK 3: Dark mode (simple) colors:brown/beige
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// TASK 4: Toggle message
let messageOn = true;
msgBtn.addEventListener("click", () => {
  messageOn = !messageOn;
  msg.textContent = messageOn ? "Message: ON" : "Message: OFF";
});

// TASK 5: input (live)
liveInput.addEventListener("input", (e) => {
  liveOut.textContent = "Live: " + e.target.value;
});

// TASK 6: submit (form) - display "Form submitted"
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formOut.textContent = "Form status: Form submitted";
});
