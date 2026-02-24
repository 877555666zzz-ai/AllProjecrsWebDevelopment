const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const taskContainer = document.getElementById("taskContainer");
const charCount = document.getElementById("charCount");
const sortSelect = document.getElementById("sortSelect");
const searchInput = document.getElementById("searchInput");
const darkModeBtn = document.getElementById("darkModeBtn");

const totalCount = document.getElementById("totalCount");
const doneCount = document.getElementById("doneCount");
const leftCount = document.getElementById("leftCount");

let tasks = JSON.parse(localStorage.getItem("study_tasks")) || [];
let searchValue = "";

function saveTasks() {
  localStorage.setItem("study_tasks", JSON.stringify(tasks));
}

function updateStats() {
  let done = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].done) {
      done++;
    }
  }

  totalCount.textContent = tasks.length;
  doneCount.textContent = done;
  leftCount.textContent = tasks.length - done;
}


function renderTasks() {
  taskContainer.innerHTML = "";

  let list = tasks.slice();

  if (searchValue.trim() !== "") {
    let filtered = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i].text.toLowerCase().includes(searchValue.toLowerCase())) {
        filtered.push(list[i]);
      }
    }

    list = filtered;
  }


  if (sortSelect.value === "az") {
    list.sort(function (a, b) {
      return a.text.localeCompare(b.text);
    });
  } else if (sortSelect.value === "za") {
    list.sort(function (a, b) {
      return b.text.localeCompare(a.text);
    });
  } else if (sortSelect.value === "liked") {
    list.sort(function (a, b) {
      return Number(b.liked) - Number(a.liked);
    });
  }

  if (list.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No tasks yet. Add your first task ✍️";
    taskContainer.appendChild(empty);

    updateStats();
    saveTasks();
    return;
  }

  for (let i = 0; i < list.length; i++) {
    const task = list[i];
    const realIndex = tasks.indexOf(task);

    const card = document.createElement("div");
    card.className = "task-card";
    if (task.done) {
      card.classList.add("done");
    }

    const top = document.createElement("div");
    top.className = "card-top";

    const likeBadge = document.createElement("span");
    likeBadge.className = "like-badge";
    likeBadge.textContent = task.liked ? "❤️ Liked" : "🤍 Not liked";

    const status = document.createElement("span");
    status.className = "task-status";
    status.textContent = task.done ? "✅ Done" : "⏳ In progress";

    top.appendChild(likeBadge);
    top.appendChild(status);

    const title = document.createElement("h4");
    title.className = "task-title";
    title.textContent = task.text;

    const meta = document.createElement("div");
    meta.className = "task-meta";
    meta.textContent = "Task item";

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const doneBtn = document.createElement("button");
    doneBtn.className = "complete";
    doneBtn.textContent = task.done ? "Undo" : "Done";
    doneBtn.addEventListener("click", function () {
      tasks[realIndex].done = !tasks[realIndex].done;
      renderTasks();
    });

    const likeBtn = document.createElement("button");
    likeBtn.className = "like";
    likeBtn.textContent = task.liked ? "Unlike" : "Like";
    likeBtn.addEventListener("click", function () {
      tasks[realIndex].liked = !tasks[realIndex].liked;
      renderTasks();
    });

    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function () {
      const newText = prompt("Edit task:", tasks[realIndex].text);

      if (newText !== null && newText.trim() !== "") {
        tasks[realIndex].text = newText.trim();
        renderTasks();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(realIndex, 1);
      renderTasks();
    });

    actions.appendChild(doneBtn);
    actions.appendChild(likeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    card.appendChild(top);
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(actions);

    taskContainer.appendChild(card);
  }

  updateStats();
  saveTasks();
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    return;
  }

  tasks.push({
    text: text,
    done: false,
    liked: false
  });

  taskInput.value = "";
  charCount.textContent = "0 / 50";

  renderTasks();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

taskInput.addEventListener("input", function () {
  charCount.textContent = taskInput.value.length + " / 50";
});

searchInput.addEventListener("input", function () {
  searchValue = searchInput.value;
  renderTasks();
});

sortSelect.addEventListener("change", function () {
  renderTasks();
});

clearAllBtn.addEventListener("click", function () {
  if (tasks.length === 0) return;

  const ok = confirm("Clear all tasks?");
  if (ok) {
    tasks = [];
    renderTasks();
  }
});

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("study_dark_mode", "dark");
  } else {
    darkModeBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("study_dark_mode", "light");
  }
});

const savedTheme = localStorage.getItem("study_dark_mode");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  darkModeBtn.textContent = "☀️ Light Mode";
}

renderTasks();