// DarkLight
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
};
// plus and minus
let count = 0;

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const countEl = document.getElementById("count");
const cartCount = document.getElementById("cartCount");
function updateCount() {
  countEl.textContent = count;
  cartCount.textContent = count;
}
plus.onclick = () => {
  count++;
  updateCount();
};
minus.onclick = () => {
  if (count > 0) {
    count--;
    updateCount();
  }
};
updateCount();
// Like
const btn6 = document.getElementById("btn6");

btn6.onclick = () => {
  btn6.classList.toggle("liked");
  btn6.textContent = btn6.classList.contains("liked") ? "Liked" : "Like";
};
// read more
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
// getcoupons
const btn10 = document.getElementById("btn10");

btn10.onclick = () => {
  btn10.classList.toggle("lose");

  btn10.textContent = btn10.classList.contains("lose")
    ? "Unfortunately, There is No Discount"
    : "GET COUPONS";
};