const form = document.querySelector("#profileForm");

const nameInput = document.querySelector("#nameInput");
const ageInput = document.querySelector("#ageInput");
const majorInput = document.querySelector("#majorInput");
const studentCheck = document.querySelector("#studentCheck");

const nameText = document.querySelector("#nameText");
const ageText = document.querySelector("#ageText");
const majorText = document.querySelector("#majorText");
const genderText = document.querySelector("#genderText");
const statusText = document.querySelector("#statusText");

nameInput.addEventListener("input", () => {
    nameText.textContent = nameInput.value;
});

ageInput.addEventListener("input", () => {
    ageText.textContent = ageInput.value;
});

majorInput.addEventListener("input", () => {
    majorText.textContent = majorInput.value;
});

studentCheck.addEventListener("change", () => {
    statusText.textContent = studentCheck.checked ? "Student" : "Not a student";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked');
    genderText.textContent = gender ? gender.value : "-";
});