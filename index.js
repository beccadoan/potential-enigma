// get functions from other files, and include necessary installations
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const writeToFile = require('./utils/generateFile')

// This is the user prompt. The values passed from this will be used to create a README
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: "What is the name of the project you're creating a README for?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter project name');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: "Please describe your project",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please describe your project');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: "What are the steps to install this project?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please provide installation instructions');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: "Provide usage examples and instructions",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter usage instructions');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contribution',
                message: "Please describe how others can contribute to your project",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter contribution instructions');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'tests',
                message: "Please add your test instructions here",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter test instructions');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'You can add a license to this project here',
                choices: ['Apache', 'MIT', 'IBM', 'BSD']
              },
            
        ])
}

// prompt user, then pass response into function that generated markdown from it, then write that content into a new file;
promptUser().then(userResponse => {
    const markdownData = generateMarkdown(userResponse)
    writeToFile(markdownData);
})