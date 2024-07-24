// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');

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
            type: 'list',
            name: 'license',
            message: questions[5],
            choices: [
                "None",
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "BSD 2-Clause 'Simplified' License",
                "BSD 3-Clause 'New' or 'Revised' License",
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "GNU Lesser General Public License v2.1",
                "Mozilla Public License 2.0",
                "The Unlicense"
            ],
            
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
 
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
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
