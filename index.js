const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

];

// function to write README file
function writeToFile(data) {
    generateMarkdown(data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions);
}

// function call to initialize program
init()
    .then((data) => writeFileAsync('README.md', writeToFile(data)))
    .then(() => console.log('Successfully wrote readme'))
    .catch((err) => console.error(err));
