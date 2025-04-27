let arr = [1, 2, 3, 9, 5, 6];
let ar = [0, 0, 0, 0, 0];
let a = [9, 7, 5, 3, 1];

arr.pop(); // takes out last element of an array
arr.push(666); // puts elemnts on the end of an array
arr.push("brodie") // we can also push strings
arr.shift(); // opposite of pop()
arr.unshift(.92239874823678236478); //opposite of push() 
arr.sort(); //sorts in accending order
a.splice(1, 2, 999, 800, 399); //removes elements from index 1 and 2, then adds 999, 800, 399 there 
a.reverse(); //as the name says

console.log(arr.concat(ar)); //joins multiple arrays in one single array and makes a entirely different one
console.log(arr);
console.log(a);

//for each
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
fruits.forEach((fruit, index, array) => {
    array[index] = fruit.toUpperCase();
    // arr[index] = fruit; returns the array as it is
});
console.log(fruits); // ["APPLE", "BANANA", "ORANGE"]
const numbers = [1, 2, 3, 4];
let sum = 0;
numbers.forEach((num, index) => { //no need of index in here cause its only numbers not char of strings
    sum += num;
});
console.log(sum); // 10
numbers.forEach((num, index, arr) => {
    arr[index] = num + 10; // Modify original array
});
console.log(numbers); // [11, 12, 13]

//map()
const ra = [1, 2, 3, 4, 5];
ra.map((value, index, array) => {
    return value * value;
})
const newNumbers = numbers.map((num) => {
    return num + 10; // Create new values
});
console.log(newNumbers); // [11, 12, 13]
console.log(numbers); // [1, 2, 3] (original unchanged)

//filter()
const evensFilter = numbers.filter(num => num % 2 === 0);
console.log(evensFilter); // [2, 4]
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 60 },
    { name: "Charlie", score: 90 }
];
const highScorers = students.filter(student => student.score > 80);
console.log(highScorers);

//reduce()
const orders = [
    { item: "book", price: 20 },
    { item: "pen", price: 5 },
    { item: "notebook", price: 15 }
];
const totalPrice = orders.reduce((acc, order) => acc + order.price, 0); //acc = accumulator
console.log(totalPrice); // 40
const items = [
    { name: "apple", price: 2 },
    { name: "banana", price: 3 }
];
const totalP = items.reduce((acc, item) => {
    return acc + item.price;
}, 0);
console.log(totalP); // 5

//array.from()
// Convert a string to an array of uppercase characters
const word = "hello";
const upperChars = Array.from(word, char => char.toUpperCase());
console.log(upperChars); // ["H", "E", "L", "L", "O"]
// Convert a Set to an array and filter
const set = new Set([1, 2, 2, 3]);
const uniqueEvens = Array.from(set).filter(num => num % 2 === 0);
console.log(uniqueEvens); // [2]

//for in and of
const numb = [10, 20, 30, 40];
// for...in (not recommended)
for (const index in numb) {
  if (numb[index] > 20) {
    console.log(numb[index]); // 30, 40
  }
}
// for...of
for (const num of numb) {
  if (num > 20) {
    console.log(num); // 30, 40
  }
}
// Compare with filter
const bigNums = numb.filter(num => num > 20);
console.log(bigNums); // [30, 40]