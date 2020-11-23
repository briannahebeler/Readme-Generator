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
` # Readme-Generator
${data.title}
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
