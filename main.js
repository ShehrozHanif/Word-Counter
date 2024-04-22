#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.yellow("Enter your sentence to check the words")
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`${chalk.yellow("Words Counts")} = ${chalk.red(words.length)}`);
