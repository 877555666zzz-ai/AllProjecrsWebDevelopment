// Task 1
const status1 = document.getElementById("status1");
const btn1 = document.getElementById("btn1");
btn1.onclick = () => {
  status1.classList.toggle("on");
  status1.classList.toggle("off");
  status1.textContent = status1.classList.contains("on") ? "Status: ON" : "Status: OFF";
};

// Task 2
const warning2 = document.getElementById("warning2");
const btn2 = document.getElementById("btn2");
btn2.onclick = () => {
  warning2.style.display = warning2.style.display === "none" || warning2.style.display === "" ? "block" : "none";
};

// Task 3
const card3 = document.getElementById("card3");
const btn3 = document.getElementById("btn3");
btn3.onclick = () => {
  card3.classList.toggle("active");
  btn3.textContent = card3.classList.contains("active") ? "Unselect" : "Select";
};

// Task 4
const box4 = document.getElementById("box4");
const btn4 = document.getElementById("btn4");
btn4.onclick = () => {
  box4.classList.toggle("compact");
  btn4.textContent = box4.classList.contains("compact") ? "Large" : "Compact";
};

// Task 5
const btn5 = document.getElementById("btn5");
const badge5 = document.querySelector(".badge5");
btn5.onclick = () => { badge5.style.display = badge5.style.display === "flex" ? "none" : "flex"; };

// Task 6
const btn6 = document.getElementById("btn6");
btn6.onclick = () => {
  btn6.classList.toggle("liked");
  btn6.textContent = btn6.classList.contains("liked") ? "Liked" : "Like";
};

// Task 7
const btn7 = document.getElementById("btn7");
const longText7 = document.getElementById("longText7");
btn7.onclick = () => {
  if (longText7.style.display === "none" || longText7.style.display === "") {
    longText7.style.display = "inline";
    btn7.textContent = "Read less";
  } else {
    longText7.style.display = "none";
    btn7.textContent = "Read more";
  }
};

// Task 8
const btn8 = document.getElementById("btn8");
btn8.onclick = () => {
  btn8.classList.toggle("unlocked");
  btn8.textContent = btn8.classList.contains("unlocked") ? "Unlocked" : "Locked";
};

// Task 9
const btn9 = document.getElementById("btn9");
const cards9 = document.querySelectorAll(".card9");
btn9.onclick = () => {
  const isHidden = cards9[0].style.display === "none" || cards9[0].style.display === "";
  cards9.forEach(c => c.style.display = isHidden ? "block" : "none");
  btn9.textContent = isHidden ? "Hide All" : "Show All";
};

// Task 10
const btn10 = document.getElementById("btn10");
btn10.onclick = () => {
  btn10.classList.toggle("loading");
  btn10.textContent = btn10.classList.contains("loading") ? "Loading..." : "Ready";
};