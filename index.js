const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


const promptUser = () => {
    // returns an array of questions for user
    return inquirer.prompt([
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'link',
        message: 'What is your Github profile link?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    ]);
};

// const to write README file
const generateMarkdown = (data) => 
` # ${data.title}

## Description 

## Table of Contents  
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

## Usage 

## License

## Contributing

## Tests

## Questions
If you have any additional questions about this application you can reach out to me at ${data.email}.
You can check out some of my other projects at ${data.username} (${data.link}).
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
