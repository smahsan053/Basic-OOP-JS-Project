#! /usr/bin/env node
import inquirer from "inquirer";
import { Person, Student } from "./Person.js";
try {
    const response = await inquirer.prompt([{
            type: 'number',
            name: 'type',
            message: 'Type 1 if you like to talk to others and type 2 if you would rather keep to yourself:'
        }]);
    // console.log(response.type);
    const myPerson = new Person();
    myPerson.AskQuestion(Number.parseInt(response.type, 10));
    console.log(`You are: ${myPerson.GetPersonality()}`);
    const answer = await inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name:'
        }]);
    // console.log(answer.name);
    const myStudent = new Student();
    myStudent.Name = answer.name;
    console.log(`Your name is: ${myStudent.Name} and your personality type is: ${myStudent.GetPersonality()}`);
}
catch (error) {
    console.log("Please enter an integer value");
}
