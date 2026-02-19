themeBtn.addEventListener("click", () => document.body.classList.toggle("light"));

const screen = document.getElementById("screen");
const keys = document.getElementById("keys");

let cur = "0";
let a = null; 
let op = "";
let wait = false;

keys.addEventListener("click", function (e) {
  if (e.target.tagName !== "BUTTON") return;
  const id = e.target.id;
  if (
    id === "0" || id === "1" || id === "2" || id === "3" || id === "4" ||
    id === "5" || id === "6" || id === "7" || id === "8" || id === "9"
  ) {
    if (wait === true) {
      cur = id;
      wait = false;
    } else {
      if (cur === "0") cur = id;
      else cur = cur + id;
    }
    screen.textContent = cur;
    return;
  }
  if (id === "C") {
    cur = "0";
    a = null;
    op = "";
    wait = false;
    screen.textContent = cur;
    return;
  }
  if (id === "BACK") {
    if (wait === true) return;

    if (cur.length <= 1) cur = "0";
    else cur = cur.slice(0, -1);

    screen.textContent = cur;
    return;
  }
  if (id === "ADD" || id === "SUB" || id === "MUL" || id === "DIV") {
    a = Number(cur);
    if (id === "ADD") op = "+";
    if (id === "SUB") op = "-";
    if (id === "MUL") op = "*";
    if (id === "DIV") op = "/";
    wait = true;
    return;
  }

  if (id === "EQ") {
    if (a === null) return;
    if (op === "") return;

    const b = Number(cur);
    let r = 0;

    if (op === "+") r = a + b;
    if (op === "-") r = a - b;
    if (op === "*") r = a * b;

    if (op === "/") {
      if (b === 0) r = "Error";
      else r = a / b;
    }

    cur = String(r);
    screen.textContent = cur;

    a = null;
    op = "";
    wait = true;
  }
});