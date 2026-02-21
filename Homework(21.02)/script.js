const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskContainer = document.getElementById("taskContainer");
const charCount = document.getElementById("charCount");
const clearAllBtn = document.getElementById("clearAllBtn");
const sortSelect = document.getElementById("sortSelect");
const darkModeBtn = document.getElementById("darkModeBtn");

const editModal = document.getElementById("editModal");
const editInput = document.getElementById("editInput");
const saveEditBtn = document.getElementById("saveEditBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;

function render() {
    taskContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        const card = document.createElement("div");
        card.className = "task-card";

        const title = document.createElement("h4");
        title.textContent = task;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => openModal(index));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", () => deleteTask(index));

        card.appendChild(title);
        card.appendChild(editBtn);
        card.appendChild(deleteBtn);

        taskContainer.appendChild(card);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    if (taskInput.value.trim() === "") return;

    tasks.push(taskInput.value);
    taskInput.value = "";
    render();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function deleteTask(index) {
    tasks.splice(index, 1);
    render();
}

clearAllBtn.addEventListener("click", () => {
    tasks = [];
    render();
});

taskInput.addEventListener("input", () => {
    charCount.textContent = `${taskInput.value.length} / 50`;
});

sortSelect.addEventListener("change", () => {
    if (sortSelect.value === "az") {
        tasks.sort();
    } else if (sortSelect.value === "za") {
        tasks.sort().reverse();
    }
    render();
});

function openModal(index) {
    editIndex = index;
    editInput.value = tasks[index];
    editModal.style.display = "flex";
}

saveEditBtn.addEventListener("click", () => {
    tasks[editIndex] = editInput.value;
    editModal.style.display = "none";
    render();
});

closeModalBtn.addEventListener("click", () => {
    editModal.style.display = "none";
});

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

render();