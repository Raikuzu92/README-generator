// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    "What is the title of the project?",
    "What is the description of this README?",
    "Are there any new features or functionalities?",
    "Who is the target audience?",
    "Who contributed to your project?",
    "What is the license?",
    "What are the installation instructions?",
    "What will the usage be?",

];

async function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'features',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'audience',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'license',
            message: questions[5],
        },
        {
          type: 'input',
          name: 'install',
          message: questions[6],
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[7],
    },
    ]);
}

function writeToFile(fileName, data) {
    const content = 
    `# Title = ${data.title}

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribute}

## License
${data.license}
`;

    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('README.md created successfully!');
        }
    });

    // Consider how you want to use the generateMarkdown function here
    // generateMarkdown.generateMarkdown(data);
}

async function init() {
    console.log("Welcome to the README generator!");

    const userData = await promptUser().catch(error => {
        console.error('Error', error);
        return null;
    });

    if (userData) {
        const fileName = 'README.md';
        try {
            await writeToFile(fileName, userData);
        } catch (error) {
            console.error("Error writing README:", error);
        }
    }
}

init();
