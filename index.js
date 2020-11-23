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
            "Academic Free v3.0",
            "Apache 2.0",
            "Artistic 2.0",
            "Boost Software 1.0",
            'BSD 2-clause "Simplified"',
            'BSD 3-clause "New" or "Revised"',
            'BSD 3-clause Clear',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public',
            'Educational Community v2.0',
            'Eclipse Public 1.0',
            'Eclipse Public 2.0',
            'European Union Public 1.1',
            'GNU Affero General Public v3.0',
            "GNU General Public License family", 
            "GNU General Public v2.0", 
            "GNU General Public v3.0",
            "GNU Lesser General Public License family",
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            "MIT",
            "Mozilla Public 2.0",
            'Open Software 3.0',
            'PostgreSQL',
            'SIL Open Font 1.1',
            'University of Illinois/NCSA Open Source',
            'The Unlicense',
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
        message: 'Write any test instructions',
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
${data.Media}

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
    console.log("I can see this");
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
