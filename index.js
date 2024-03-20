#! /usr/bin/env node
import inquirer from "inquirer";
// here we start to build a simple calculater using  inquireir and chalk .
// In this part of code we  ask the user for two numbers that he want's to calculate.
const startCalculator1 = async () => {
    const answer = await inquirer.prompt([
        {
            message: "Enter your first number : ",
            type: "number",
            name: "firstNum"
        },
        { message: "Enter your second number : ",
            type: "number",
            name: "secondNum"
        },
        {
            message: "Select one of the operator to perform an operation",
            // here i use chalk to color the choices. 
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Remender"],
            type: "list",
            name: "operators",
        }
    ]);
    // here is the login for the calculater. that h=what operation should be perform when  the user chose an operator.
    if (answer.operators === "Addition") {
        console.log(answer.firstNum + answer.secondNum);
    }
    else if (answer.operators === "Subtraction") {
        console.log(answer.firstNum - answer.secondNum);
    }
    else if (answer.operators === "Multiplication") {
        console.log(answer.firstNum * answer.secondNum);
    }
    else if (answer.operators === "Division") {
        console.log(answer.firstNum / answer.secondNum);
    }
    else {
        // in the case , when user  enter something other than what is listed in the list of operators, it will show this message:
        console.log("plese enter a valid operator");
    }
    ;
};
startCalculator1();
//Yaha ek ghalti i thi meny ky men function ko call hi nhi kia tha .
