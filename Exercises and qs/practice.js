for (let i = 2; i <= 10; i += 2) {
    console.log(i); // Outputs 2, 4, 6, 8, 10
}
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum); // Outputs 15 (1 + 2 + 3 + 4 + 5)
for (let i = 10; i >= 1; i--) {
    console.log(i); // Outputs 10, 9, 8, ..., 1
}
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {   
    console.log(`Index ${i}: ${fruits[i]}`); // Outputs Index 0: apple, Index 1: banana, Index 2: orange
}




let j = 2;
while(j <= 10){
    console.log(j);
    j += 2;
}
let num = 1; 
while(num <=100){   
    num *= 2;
}console.log(num); //its outside becouse if it was inside it would output those number that are power of 2 but smaller then 100
let acc = ['b', 'c', 'a', 'j', 'k'];
while(acc.length > 0){
    console.log(acc.pop());
}let user = 0;
while(user <= 10){  
    console.log(`input: ${user}`);
    user += Math.floor(Math.random() * 5);
}




let k = 2;
do{
    console.log(k);
    k += 2;
}
while(k <= 10);
let numb;
do{
    console.log(`got: ${numb}`);
    numb = Math.floor(Math.random() * 10);
}
while(numb <= 0);
let count = 0;
do {
    console.log(`Count: ${count}`);
    count--;
} while (count > 0);
// Outputs Count: 0 (runs once even though condition is false)
let sume = 0;
do {
    let value = Math.floor(Math.random() * 10);
    sume += value;
    console.log(`Added ${value}, Sum: ${sume}`);
} while (sume <= 20);
// Outputs additions until sum > 20




let arr = [1, 2, 3, 4, 5];
for(let item of arr){
    console.log(item);
}
const word = 'hello';
for (let char of word) {
    console.log(char); // Outputs h, e, l, l, o
}
const numbers = [10, 20, 30, 40];
let sums = 0;
for (let nums of numbers) {
    sums += nums;
}
console.log(sums); // Outputs 100




const obj ={
    a : 1,
    b : 2,
    c : 3
}
for(let key in obj){
    console.log(key, obj[key]);
}
const person = { name: 'Alice', age: 30, city: 'New York' };
for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Outputs name: Alice, age: 30, city: New York
}
const car = { brand: 'Toyota', model: 'Camry', year: 2020 };
let counts = 0;
for (let prop in car) {
    count++;
}
console.log(count); // Outputs 3
const scores = { math: 90, science: 85, history: 95 };
for (let subject in scores) {
    scores[subject] *= 2;
}
console.log(scores); // Outputs { math: 180, science: 170, history: 190 }