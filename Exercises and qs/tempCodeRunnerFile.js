//faulty calculator
// + ---> -
// * ---> +
// - ---> /
// / ---> **
// only 10% of the times otherwise normal

function normalCalc(num1, num2, operator) {
    if(operator === "+"){
        return num1 + num2;
    }else if(operator === "-"){
        return num1 - num2;
    }
    else if(operator === "*"){
        return num1 * num2;
    }
    else if(operator === "/"){
        return num1 / num2;
    }
    else if(operator === "**"){
        return Math.pow(num1, num2);
    }
    else{
        return "Invalid operator";
    }
}

function faultyCalc(num1, num2, operator){
    if(operator === "+"){
        return num1 - num2;
    }else if(operator === "*"){
        return num1 + num2;
    }else if(operator === "-"){
        return num1 / num2;
    }else if(operator === "/"){
        return Math.pow(num1, num2);
    }else{
        return "invalid operator";
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
        rl.question("Enter the operator (+, -, *, /): ", (operator) => {
            // Check if the operator is valid
            // Convert strings to numbers
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);
            let user_op = operator;


            if(Math.random() < 0.1){
                faultyCalc(n1, n2, user_op);
                console.log("result: "+ faultyCalc(n1, n2, user_op));
            }
            else{
                normalCalc(n1, n2, user_op);
                console.log("Result: "+ normalCalc(n1, n2, user_op));
            }


            rl.close();
        });
    });
});



