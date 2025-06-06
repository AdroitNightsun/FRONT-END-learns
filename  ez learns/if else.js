let num = Math.floor(Math.random() * 101);
let num2 = Math.floor(Math.random() * 101);

if(num%2==0){
    console.log(`its even : ${num}`);
}else{
    console.log(`its odd : ${num}`);
}

//ternary operator
let res = (num%2==0) ? "even" : "odd";
console.log(`its ${res} : ${num}`);

if(num<18){
    console.log(`you are a kid`);
}else{
    console.log(`you are eligible to vote !!`);
}

//ternary op
 let age = (num<18)? "you are a kid" : "you are eligible to vote !!";
 console.log(age);

if(num > num2){
    console.log(`1(${num}) is greater ,2 is(${num2})`);
}else if(num2 > num){
    console.log(`2(${num2}) is greater ,1 is(${num})`);
}else{
    console.log(`1(${num}) and 2(${num2}) are equal`);
}