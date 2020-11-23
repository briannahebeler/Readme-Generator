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
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write any installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write any usage instructions.',
    },
    {
        type: 'input',
        name: 'usageMedia',
        message: 'Copy and paste media link here to attach a screenshot or video of your application.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your projects license?',
        choices: [
            "AFL",
            "Apache",
            "Artistic",
            "BSL",
            'BSD',
            'CC',
            'WTFPL',
            'ECL',
            'EPL',
            'EUPL',
            "GPL", 
            "LGPL",
            'ISC',
            'LPPL',
            'MSPL',
            "MIT",
            "MPL",
            'OSL',
            'PostgreSQL',
            'NCSA',
            'Unlicense',
            'zLib'
        ],
    },
    {
        type: 'list',
        name: 'badgeColor',
        message: 'What color would you like your license badge?',
        choices: [
            'brightgreen',
            'green',
            'yellowgreen',
            'yellow',
            'orange',
            'red',
            'blue',
            'lightgrey',
            'success',
            'important',
            'critical',
            'informational',
            'inactive',
            'blueviolet',
            'ff69b4',
            '9cf'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Write any contribution instructions.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write any test instructions.',
    },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // },
    ]);
};

// const to write README file
const generateMarkdown = (data) => 
` # ${data.title}
![${data.license}](https://img.shields.io/badge/license-${data.license}-${data.badgeColor})

## Description 
${data.description}

## Table of Contents  
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}
\
![](${data.usageMedia})

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any additional questions about this application you can reach out to me at ${data.email}.
You can check out some of my other projects at ${data.username} (${data.link}).
`;

// initialize program
const init = async () => {
    // console.log("I can see this");
    try {
        const data = await promptUser();

        const md = generateMarkdown(data);

        await writeFileAsync('README.md', md);

        console.log("Successfully created README.md");
    } 
    catch (err) {
        console.log(err);
    }

};

// function call to initialize program
init()
