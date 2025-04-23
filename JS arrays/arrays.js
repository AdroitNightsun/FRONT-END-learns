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