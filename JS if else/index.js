console.log("Hello World");

let a = 47;
let b =3;

a += b // a = a + b

if(a < 0){
    console.log("a is negative");
}else{
    console.log(a, a+b);
}

// one line if else
let c = (a < 0) ? "a is negative" : a + b;
console.log(c);