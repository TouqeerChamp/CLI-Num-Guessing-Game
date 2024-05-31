#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\n\tWelcome To Touqeer CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random()* 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter Your Guess Number(Number Limit Form 1 to 6)",
    },
])
if(answer.userGuessNumber === randomNumber){
    console.log("Congratulation! You Guessing The Correct Number");
}
else{
    console.log("Soory! You Guess The Rong Number");
}