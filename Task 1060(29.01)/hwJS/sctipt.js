const amount = document.getElementById("amount");
const years = document.getElementById("years");
const rate = document.getElementById("rate");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    output.textContent =
        "Amount: £" + amount.value +
        ", Years: " + years.value +
        ", Rate: " + rate.value + "%";
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});