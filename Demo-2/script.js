const Darklight = document.getElementById("Darklight");

Darklight.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".btn1");
const equalBtn = document.querySelector(".btn2");

screen.value = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "DEL") {
      screen.value = screen.value.slice(0, -1);
      return;
    }
    screen.value += value;
  });
});
resetBtn.addEventListener("click", () => {
  screen.value = "";
});
equalBtn.addEventListener("click", () => {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
});