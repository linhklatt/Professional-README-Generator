// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");
// const util = require("util");
// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "projectTitle",
    },

    {
      type: "input",
      message: "What is your project's name?",
      name: "projectName",
    },
    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "description",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input", //WHAT TYPE?
      message: "What command should be run to install dependencies?",
      name: "iDependencies",
    },
    {
      type: "input", //WHAT TYPE
      message: "What command should be run to run tests?",
      name: "testsCommand",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "guide",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "userContribution",
    },
  ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then((answers) => {
      fs.writeFile("README.md", generateReadme(answers), (err) => {
        if (err) throw err;
      });
    })
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
