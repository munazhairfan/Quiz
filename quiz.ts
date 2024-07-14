#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let questions =[chalk.yellow("Who painted the famous artwork \"Starry Night\"?\n"),chalk.yellow("What is the largest planet in our solar system?\n"),
    chalk.yellow("Who wrote the play \"Romeo and Juliet\"?\n"),chalk.yellow("What is the tallest mountain in the world?\n"),
chalk.yellow("What is the largest ocean on Earth?\n"),chalk.yellow("What is the largest continent by land area?\n"),
chalk.yellow("Who is known as the \"Father of Modern Physics\"?\n"),chalk.yellow("What is the largest mammal in the world?\n"),
chalk.yellow("What is the largest organ in the human body?\n"),
chalk.yellow("Which flower is known as the \"king of flowers\" and is often associated with luxury?\n")];

let rightanswers=["Vincent van Gogh","Jupiter","William Shakespeare","Mount Everest",
    "Pacific Ocean","Asia","Albert Einstein","Blue Whale","Skin","Rose"];

let options=[["Leonardo DiCaprio","Leonardo da Vinci","Vincent van Gogh","Pablo Picasso"],["Mars","Saturn","Jupiter","Uranus"],
["Willian Turner","Willian Moris","Willian Blake","William Shakespeare"],
["Mount Everest","K2","Nanga Parbat","Broad Peak"],["Arctic Ocean","Pacific Ocean","Atlantic Ocean","Indian Ocean"],
["Africa","Asia","Europe","America"],["Issac Newton","Stephen Hawking","Thomas Edison","Albert Einstein"],
["Blue Whale","Elephant","Squid","Giraffe"],["Liver","Lungs","Skin","Intestine"],
["Jasmine","Rose","Marigold","Lavender"]]

let count=0;
for(let i=0;i<questions.length;i++){
    let mcqs= await inquirer.prompt({
        name:`questions_${i}`,
        type:"list",
        message:questions[i],
        choices:options[i],
        
    });
    let userAnswer= mcqs[`questions_${i}`];
    if(userAnswer===rightanswers[i]){
        console.log(chalk.greenBright("Correct"));
        count++;
    }else{console.log(chalk.red("wrong!"))}
};
console.log(chalk.bgCyan(`You scored ${count}/10`));
console.log(chalk.grey("Thank you!"));