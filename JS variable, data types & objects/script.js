var a = 2; // global scope means this a is accessible everywhere
var b = 3;
console.log(a+b); // 5
var c = a + b;
console.log(c); // 5
console.log(a); // 2
console.log(typeof c, typeof a, typeof b);



{
    let a = 5; // block scope means this would not affect the outer a
    console.log(a); // 5
}

let x = "bro/crow";
let y = 22.9;
let n = null; // will show as undifiend object
let m = undefined;
const pi = 3.14;
const q = true;
console.log(typeof x, typeof y, typeof z, typeof n, typeof m, typeof pi, typeof q); // string number boolean object undefined number boolean

let o = {
    "name": "kendra",
    "age": 22,
    "isStudent": true,
    "isTeacher": true,
    "isAdmin": false,
    "isEmployee": true,
}

console.log(o); // { name: 'kendra', age: 22, isStudent: true, isTeacher: true, isAdmin: false, isEmployee: true }
o.salary = " $2000";