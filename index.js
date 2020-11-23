const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


const promptUser = () => {
    // returns an array of questions for user
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    ]);
};

// const to write README file
const generateMarkdown = (data) => 
` # ${data.title}

## Description 

// Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.

// The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

// There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.

// At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.

// ## User Story

// md
// AS A developer
// I WANT a README generator
// SO THAT I can quickly create a professional README for a new project


// ## Acceptance Criteria
// md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

## Table of Contents  
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)


## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


## Usage 

// Provide instructions and examples for use. Include screenshots as needed. 
// Add video here -> Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.

// * Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.
// * Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

// * A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.
// * The walkthrough video must demonstrate how a user would invoke the application from the command line.
// * The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
// * The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.


## License

// The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

// Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contributing

// If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.
`;

// initialize program
const init = async () => {
    console.log("I can see this");
    try {
        const data = await promptUser();

        const md = generateMarkdown(data);

        await writeFileAsync('README.md', md);

        console.log("Successfully created README.md");
    } catch (err) {
        console.log(err);
    }

};

// function call to initialize program
init()
