// Task 1
// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")

// btn1.addEventListener("click",function(){
//     btn1.textContent="Clicked 1"
// } )
// btn2.addEventListener("click",function(){
//     btn2.textContent="Clicked 2"
// } )


// Task 2
// const box = document.getElementById("box")

// box.addEventListener("click", function(event){
//     console.log("event:" , event)
//     console.log("event.target:", event.target)
// })


// Task 3
// const cards = document.getElementById("cards")

// cards.addEventListener("click", function(event){
//     if(event.target.classlist.contains("card")){
//         event.target.style.background = "lightblue";
//     }
// });


// Task 4
// const list = document.getElementById("list");

// list.addEventListener("click", function(event) {
//     if (event.target.tagName === "BUTTON"){
//         event.target.parentElement.remove();
//     }
// });


// Task 5
// const colors = document.getElementById("colors")

// colors.addEventListener("click", function(event){
//     if (event.target.tagName !== "BUTTON") return;

//     const color = event.target.dataset.color;
//     document.body.style.background = color;
// })


// Task 6
// const table = document.getElementById("table");

// table.addEventListener("click" , function(event){
//     if (event.target.tagName === "TD"){
//         event.target.parentElement.style.background = "yellow";
//     }
// });


// Task 7
// const box = document.getElementById("box");
// const result = document.getElementById("result");

// box.addEventListener("click", function(event) {
//     if (event.target.tagName === "BUTTON") {
//         const number = event.target.dataset.number;
//         result.textContent = number;
//     }
// });


// Task 8
// const box = document.getElementById("box");
// const result = document.getElementById("result");

// let total = 0; 

// box.addEventListener("click", function(event) {
//     if (event.target.tagName === "BUTTON") {
//         const number = Number(event.target.dataset.number);
//         total += number; 
//         result.textContent = total;
//     }
// });


// Task 9
// const input = document.getElementById("taskInput")
// const addBtn = document.getElementById("addBtn")
// const list = document.getElementById("list")

// addBtn.addEventListener("click", function(event){
//     if (input.value === "") return;

//     const li = document.createElement("li")
//     li.textContent = input.value; 

//     list.appendChild(li);
//     input.value = "";
// });


// Task 10
// const form = document.getElementById("todoForm");
// const input = document.getElementById("taskInput");
// const list = document.getElementById("list");

// form.addEventListener("submit", function(event) {

//     event.preventDefault();

//     if (input.value === "") return;

//     const li = document.createElement("li");

//     li.textContent = input.value;

//     const btn = document.createElement("button");
//     btn.textContent = "Delete";
//     btn.classList.add("delete");

//     li.appendChild(btn);

//     list.appendChild(li);

//     input.value = "";
// });

// list.addEventListener("click", function(event) {
//     if (event.target.classList.contains("delete")) {
//         event.target.parentElement.remove();
//     }
// });


// Task 11
// const form = document.getElementById("todoForm");
// const input = document.getElementById("taskInput");
// const list = document.getElementById("list");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   if (input.value.trim() === "") return;
//   const li = document.createElement("li");
//   li.textContent = input.value;
//   const btn = document.createElement("button");
//   btn.textContent = " Delete";
//   btn.classList.add("delete");
//   li.appendChild(btn);
//   list.appendChild(li);
//   input.value = "";
// });

// list.addEventListener("click", function(event) {
//   if (event.target.classList.contains("delete")) {
//     event.target.parentElement.remove();
//   }
//   if (event.target.tagName === "LI") {
//     event.target.classList.toggle("done");
//   }
// });


// Task 12
// const openBtn = document.getElementById("openBtn");
// const closeBtn = document.getElementById("closeBtn");
// const modal = document.getElementById("modal");

// function openModal() {
//     modal.classList.add("show");
//     document.body.classList.add("no-scroll");
// };

// function closeModal() {
//     modal.classList.remove("show");
//     document.body.classList.remove("no-scroll");
// };

// openBtn.addEventListener("click", openModal);
// closeBtn.addEventListener("click", closeModal);

// modal.addEventListener("click", function(event) {
//     if (event.target === modal) {
//         closeModal();
//     }
// });

// document.addEventListener("keydown", function(event) {
//     if (event.key === "Escape") {
//         closeModal();
//     }
// });


// Task 13
// const menu = document.getElementById("menu");
// const pages = document.querySelectorAll(".page");

// menu.addEventListener("click", function(event) {
//   if (event.target.tagName === "LI") {
    
//     document.querySelectorAll("#menu li").forEach(function(item) {
//       item.classList.remove("active");
//     });
    
//     event.target.classList.add("active");
    
//     const pageName = event.target.dataset.page;
    
//     pages.forEach(function(section) {
//       section.classList.remove("active-page");
      
//       if (section.dataset.content === pageName) {
//         section.classList.add("active-page");
//       }
//     });
//   }
// });





// 19.02


// Page 53
// const students = ["Ali", "Dana", "Aruzhan"]
// const list = document.querySelector("#list")

// students.forEach(function(name){
//     list.innerHTML += ⁠ <li>${name}</li> ⁠
// })


// Page 54
// const students = [
//     {name: "Ali", course:1},
//     {name: "Dana", course:2},
//     {name: "Aruzhan", course:1}
// ]

// const list = document.querySelector("#list");
// students.forEach(function(student){
//     list.innerHTML += `
//     <li>
//     ${student.name} - Course: ${student.course}
//     </li>
//     `;
// });


// Page 55
// const students = [
//     {name: "Ali", course:1},
//     {name: "Dana", course:2},
//     {name: "Aruzhan", course:1}
// ]

// const list = document.querySelector("#list");
// const btn = document.querySelector("#btn");

// function render(arr) {
//     list.innerHTML = "";

//     arr.forEach(function(student){
//         list.innerHTML += `
//     <li>
//     ${student.name} - Course: ${student.course}
//     </li>
//     `;
//     })
// }

// render(students);

// btn.addEventListener("click", function(){
//     const filtered = students.filter(function(student){
//         return student.course === 1;
//     });
//     render(filtered);
// });



// Page 63
// const numbers = [1,2,3,4,5,6];

// const list = document.querySelector("#list");
// const btn = document.querySelector("#btn");

// function render(arr) {
//     list.innerHTML = "";

//     arr.forEach(function (num){
//         list.innerHTML += ⁠ <li>${num}</li> ⁠;
//     });
// };

// render(numbers);

// btn.addEventListener("click", function() {
//     const even = numbers.filter(function(num){
//         return num % 2 === 0;
//     });
//     render(even);
// });


// Page 64
// const products = [
//     {name: "Phone", price: 300},
//     {name: "Laptop", price: 1000},
//     {name: "Tablet", price: 450}
// ]

// const list = document.querySelector("#list")
// const btn = document.querySelector("#btn")

// function render(arr) {
//     list.innerHTML = "";

//     arr.forEach(function(product){
//         list.innerHTML += ⁠ <li>${product.name} - ${product.price}$</li> ⁠;
//     });
// };

// render(products);

// btn.addEventListener("click", function(){
//     const cheap = products.filter(function(product){
//         return product.price < 500;
//     });
//     render(cheap);
// });


// Page 65
// const students = ["Ali", "Dana", "Aruzhan", "Nursultan", "Aidos", "Alihan", "Alibek", "Amina", "Arman", "Adilet", "Azamat", "Bekzat", "Bauyrzhan", "Damir", "Daniyar", "Dinara", "Eldar", "Ernar", "Erbol", "Gulnur", "Iskander", "Kairat", "Madina", "Marat", "Miras", "Mukhtar", "Nurbek", "Nurlan", "Nurbol", "Olzhas", "Rauan", "Ruslan", "Sabina", "Serik", "Sultan", "Temirlan", "Timur", "Talgat", "Ulan", "Yerlan", "Yerkebulan", "Zarina", "Zhandos", "Zhanibek", "Aigerim", "Fariza"];
// const list = document.querySelector("#list")
// const search = document.querySelector("#search")

// function render(arr){
//     list.innerHTML = "";

//     arr.forEach(function(name){
//         list.innerHTML += ⁠ <li>${name}</li> ⁠;
//     });
// };

// render(students);
// search.addEventListener("input", function(){
//     const value = search.value.toLowerCase();

//     const filtered = students.filter(function(name){
//         return name.toLowerCase().includes(value);
//     });
//     render(filtered);
// });



// Page 69
// const students = ["Ali", "Dana", "Aruzhan", "Nursultan", "Aidos", "Alihan", "Alibek", "Amina", "Arman", "Adilet", "Azamat", "Bekzat", "Bauyrzhan", "Damir", "Daniyar", "Dinara", "Eldar", "Ernar", "Erbol", "Gulnur", "Iskander", "Kairat", "Madina", "Marat", "Miras", "Mukhtar", "Nurbek", "Nurlan", "Nurbol", "Olzhas", "Rauan", "Ruslan", "Sabina", "Serik", "Sultan", "Temirlan", "Timur", "Talgat", "Ulan", "Yerlan", "Yerkebulan", "Zarina", "Zhandos", "Zhanibek", "Aigerim", "Fariza"];
// const original = [...students];

// const list = document.querySelector("#list")
// const azBtn = document.querySelector("#az")
// const zaBtn = document.querySelector("#za")
// const resetBtn = document.querySelector("#reset")

// function render(arr){
//     list.innerHTML = "";
//     arr.forEach(function(name){
//         list.innerHTML += ⁠ <li>${name}</li> ⁠;
//     });
// }

// render(students);

// azBtn.addEventListener("click", function(){
//     const sorted = [...students].sort();
//     render(sorted)
// });

// zaBtn.addEventListener("click", function(){
//     const sorted = [...students].sort().reverse();
//     render(sorted)
// });

// resetBtn.addEventListener("click", function(){
//     render(original)
// });


// Page 71
const students = [
  { name: "Timur", surname: "Bekov", age: 18, course: 1 },
  { name: "Sofia", surname: "Mukhina", age: 19, course: 2 },
  { name: "Amina", surname: "Kenzhebaeva", age: 18, course: 1 },
  { name: "Dias", surname: "Muratov", age: 21, course: 3 },
  { name: "Ilyas", surname: "Karimov", age: 20, course: 2 },
  { name: "Madina", surname: "Zhaksylyk", age: 18, course: 1 },
  { name: "Noah", surname: "Parker", age: 19, course: 1 },
  { name: "Sanzhar", surname: "Ryskul", age: 22, course: 3 },
  { name: "Elif", surname: "Yilmaz", age: 20, course: 2 },
  { name: "Ramil", surname: "Guseynov", age: 21, course: 2 },
  { name: "Aisulu", surname: "Tleubayeva", age: 22, course: 3 },
  { name: "Arman", surname: "Suleimenov", age: 18, course: 1 },
  { name: "Karina", surname: "Volkova", age: 19, course: 2 },
  { name: "Ernar", surname: "Zhumanov", age: 18, course: 1 },
  { name: "Mira", surname: "Petrova", age: 18, course: 1 },
  { name: "Aziza", surname: "Usmanova", age: 20, course: 2 },
  { name: "Omar", surname: "Hassan", age: 23, course: 3 },
];

const list = document.querySelector("#list");
const searchInput = document.querySelector("#search");
const courseSelect = document.querySelector("#course");
const sortSelect = document.querySelector("#sort");
const resetBtn = document.querySelector("#reset");
const ageSelect = document.querySelector("#age");

// Заполняем select возрастами автоматически
const ages = [...new Set(students.map(s => s.age))].sort((a,b)=>a-b);
ages.forEach(age => {
  const opt = document.createElement("option");
  opt.value = age;
  opt.textContent = age;
  ageSelect.appendChild(opt);
});

function render(arr) {
  list.innerHTML = "";
  arr.forEach(function (s) {
    list.innerHTML += `
      <li>
        <strong>${s.name} ${s.surname}</strong>
        <span class="badge">Age: ${s.age}</span>
        <span class="badge">Course: ${s.course}</span>
      </li>
    `;
  });
}

function applyAll() {
  const text = searchInput.value.toLowerCase().trim();
  const courseValue = courseSelect.value;
  const sortValue = sortSelect.value;
  const ageValue = ageSelect.value;

  let result = students;

  if (text !== "") {
    result = result.filter(s => (s.name + " " + s.surname).toLowerCase().includes(text));
  }

  if (courseValue !== "all") {
    result = result.filter(s => s.course === Number(courseValue));
  }

  if (ageValue !== "all") {
    result = result.filter(s => s.age === Number(ageValue));
  }

  if (sortValue === "az") {
    result = [...result].sort((a, b) => (a.name + " " + a.surname).localeCompare(b.name + " " + b.surname));
  }

  if (sortValue === "za") {
    result = [...result].sort((a, b) => (b.name + " " + b.surname).localeCompare(a.name + " " + a.surname));
  }

  render(result);
}

searchInput.addEventListener("input", applyAll);
courseSelect.addEventListener("change", applyAll);
sortSelect.addEventListener("change", applyAll);
ageSelect.addEventListener("change", applyAll);

resetBtn.addEventListener("click", function () {
  searchInput.value = "";
  courseSelect.value = "all";
  sortSelect.value = "none";
  ageSelect.value = "all";
  render(students);
});

render(students);