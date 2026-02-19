/* 1 Navigation */
const menu = document.getElementById("menu");
const sections = document.querySelectorAll("section");

menu.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    menu.querySelectorAll("button").forEach(btn => btn.classList.remove("btn-active"));
    event.target.classList.add("btn-active");

    const name = event.target.dataset.section;
    sections.forEach(sec => {
      sec.classList.remove("section-active");
      if (sec.id === name) sec.classList.add("section-active");
    });
  }
});

/* 2 Task Manager */
const taskForm = document.getElementById("taskForm");
const taskField = document.getElementById("taskField");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function(e) {
  e.preventDefault();
  if (taskField.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskField.value;

  const del = document.createElement("button");
  del.textContent = "Remove";
  del.classList.add("remove-btn");

  li.appendChild(del);
  taskList.appendChild(li);

  taskField.value = "";
});

taskList.addEventListener("click", function(e) {
  if (e.target.classList.contains("remove-btn")) {
    e.target.parentElement.remove();
  }
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done-task");
  }
});

/* 3 Rating */
const ratingBox = document.getElementById("ratingBox");
const ratingOutput = document.getElementById("ratingOutput");

ratingBox.addEventListener("click", function(e) {
  if (e.target.tagName !== "SPAN") return;

  const rate = e.target.dataset.rate;

  ratingBox.querySelectorAll("span").forEach(star => {
    star.classList.remove("star-selected");
    if (star.dataset.rate <= rate) {
      star.classList.add("star-selected");
    }
  });

  ratingOutput.textContent = "Your rating: " + rate;
});

/* 4 Cart */
const productContainer = document.getElementById("productContainer");
const cartList = document.getElementById("cartList");

productContainer.addEventListener("click", function(e) {
  if (e.target.tagName !== "BUTTON") return;

  const name = e.target.dataset.name;

  const li = document.createElement("li");
  li.textContent = name;

  cartList.appendChild(li);
});

/* 5 Language */
const languageBox = document.getElementById("languageBox");
const pageTitle = document.getElementById("pageTitle");
const pageText = document.getElementById("pageText");

languageBox.addEventListener("click", function(e) {
  if (e.target.tagName !== "BUTTON") return;

  const lang = e.target.dataset.lang;

  if (lang === "en") {
    pageTitle.textContent = "Welcome";
    pageText.textContent = "Adilet Hi";
  }
  if (lang === "ru") {
    pageTitle.textContent = "Добро пожаловать";
    pageText.textContent = "Адилет привет";
  }
  if (lang === "kz") {
    pageTitle.textContent = "Қош келдіңіз";
    pageText.textContent = "Әділет Сәлем";
  }
});
