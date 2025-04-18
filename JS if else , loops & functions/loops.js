console.log("yo its me doing some loops here");

let a = 1;

for(let i = 0; i < 10; i++){
    console.log(a+i);   //for loop
}

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

for(const key in obj){
    console.log(key, obj[key]); //for in loop !!!!!!
}

for (const i of "karan"){
    console.log(i); //for of loop
}

let i = 0; 
while(i < 10){
    console.log(i); // while loop
    i++;
}

let j = 0;
do{
    console.log(j); // do while loop !!!!!
    j++;
}
while(j < 10);
