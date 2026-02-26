const STORAGE_KEY = "students_manager_v1";

const initialStudents = [
  { id: crypto.randomUUID(), name: "Timur Bekov", course: 1 },
  { id: crypto.randomUUID(), name: "Sofia Mukhina", course: 2 },
  { id: crypto.randomUUID(), name: "Amina Kenzhebaeva", course: 1 },
  { id: crypto.randomUUID(), name: "Dias Muratov", course: 3 },
  { id: crypto.randomUUID(), name: "Ilyas Karimov", course: 2 },
  { id: crypto.randomUUID(), name: "Madina Zhaksylyk", course: 4 },
  { id: crypto.randomUUID(), name: "Arman Serik", course: 1 },
  { id: crypto.randomUUID(), name: "Dana Sadykova", course: 2 },
  { id: crypto.randomUUID(), name: "Nursultan Aitbay", course: 3 },
  { id: crypto.randomUUID(), name: "Aruzhan Tulegen", course: 4 },
  { id: crypto.randomUUID(), name: "Ali Khan", course: 1 },
  { id: crypto.randomUUID(), name: "Zan Lee", course: 2 },
  { id: crypto.randomUUID(), name: "Asyl Kairat", course: 3 },
  { id: crypto.randomUUID(), name: "Zeynep Demir", course: 4 },
  { id: crypto.randomUUID(), name: "Malik Rahman", course: 2 },
  { id: crypto.randomUUID(), name: "Madi Iskakov", course: 1 },
  { id: crypto.randomUUID(), name: "Aigerim Bekturova", course: 2 },
  { id: crypto.randomUUID(), name: "Sanzhar Nurbek", course: 3 },
  { id: crypto.randomUUID(), name: "Aidana Rysbek", course: 4 },
  { id: crypto.randomUUID(), name: "Bekzat Oraz", course: 1 },
];

let students = loadStudents();
let query = "";

const listEl = document.getElementById("list");
const emptyEl = document.getElementById("empty");
const totalCountEl = document.getElementById("totalCount");
const shownCountEl = document.getElementById("shownCount");

const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");

const nameInput = document.getElementById("nameInput");
const courseSelect = document.getElementById("courseSelect");
const addBtn = document.getElementById("addBtn");

const resetBtn = document.getElementById("resetBtn");

searchInput.addEventListener("input", (e) => {
  query = e.target.value.trim().toLowerCase();
  render();
});

clearSearchBtn.addEventListener("click", () => {
  query = "";
  searchInput.value = "";
  render();
});

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const course = Number(courseSelect.value);

  if (!name || !course) return;

  const exists = students.some(s => s.name.toLowerCase() === name.toLowerCase() && s.course === course);
  if (exists) {
    nameInput.focus();
    return;
  }

  students.unshift({
    id: crypto.randomUUID(),
    name,
    course
  });

  saveStudents();
  nameInput.value = "";
  courseSelect.value = "";
  nameInput.focus();
  render();
});

resetBtn.addEventListener("click", () => {
  students = structuredClone(initialStudents);
  saveStudents();
  query = "";
  searchInput.value = "";
  nameInput.value = "";
  courseSelect.value = "";
  render();
});

function render() {
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(query)
  );

  totalCountEl.textContent = String(students.length);
  shownCountEl.textContent = String(filtered.length);

  listEl.innerHTML = "";

  if (filtered.length === 0) {
    emptyEl.classList.remove("hidden");
    return;
  }

  emptyEl.classList.add("hidden");

  filtered.forEach((s) => {
    const card = document.createElement("div");
    card.className = "card";

    const left = document.createElement("div");
    left.className = "left";

    const nm = document.createElement("div");
    nm.className = "name";
    nm.textContent = s.name;

    const sm = document.createElement("div");
    sm.className = "small";
    sm.textContent = `Course: ${s.course}`;

    left.appendChild(nm);
    left.appendChild(sm);

    const actions = document.createElement("div");
    actions.className = "actions";

    const delBtn = document.createElement("button");
    delBtn.className = "iconBtn dlt";
    delBtn.type = "button";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteStudent(s.id));

    actions.appendChild(delBtn);

    card.appendChild(left);
    card.appendChild(actions);

    listEl.appendChild(card);
  });
}

function deleteStudent(id) {
  students = students.filter(s => s.id !== id);
  saveStudents();
  render();
}

function saveStudents() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

function loadStudents() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(initialStudents);

  try {
    const data = JSON.parse(raw);
    if (!Array.isArray(data) || data.length < 1) return structuredClone(initialStudents);
    return data;
  } catch {
    return structuredClone(initialStudents);
  }
}

// init
render();