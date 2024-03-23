#! /usr/bin/env 

import inquirer from "inquirer"; 

// 1> Computer will generate a random number
// 2> user input for guessing number
// 3> compare user input with computer generated number and show result
 
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess A Number Between 1 to 6: ",

    }
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Connratulation!! You've Guessed The Right Number. :) ");   
} else {
    console.log("You Have Guessed The Wrong Number! :( ");    
}
