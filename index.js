#! usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "user GuessedNumber",
        type: "number",
        message: "please select a random number",
    },
]);
if (answer.userGuessedNumber === randomNumber)
    console.log("congrats you guessed it right");
else {
    console.log("oopss wrong answer");
}
