/*const grades = [45, 60, 75, 30];
const statuses = grades.map(grade => grade >= 60 ? "pass" : "fail");
console.log(statuses);*/


/*const products = [
  { name: "Laptop", price: 120000 },
  { name: "Mouse", price: 3000 },
  { name: "Phone", price: 90000 }
];

const expensiveProductNames = products
  .filter(product => product.price > 5000)
  .map(product => product.name);
console.log(expensiveProductNames);*/


/*const words = ["апельсин", "банан", "яблоко", "груша"];
const vowels = "аеёиоуыэюя";
const startsWithVowel = words.filter(word => 
  vowels.includes(word[0].toLowerCase())
);

console.log(startsWithVowel); */


/*const input = "2, 5, 10"; 
const numbers = input.split(",").map(Number);
const squares = numbers.map(num => num ** 2);
console.log(squares);*/


/*const userWords = ["дом", "программа", "код", "ноутбук"];
const longWords = userWords.filter(word => word.length > 5);
console.log(longWords);*/


/*const numbersArray = [10, -5, 0, 3, -1];
const signs = numbersArray.map(num => {
  if (num > 0) return "+";
  if (num === 0) return "0";
  return "-";
});
console.log(signs);*/


/*const wordsToReverse = ["код", "мир", "js"];
const reversed = wordsToReverse.map(word => 
  word.split("").reverse().join("")
);
console.log(reversed);*/