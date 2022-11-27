// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  
  
# ${answers.projectTitle}
${answers.license} 


## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#question)


## Installation
To install nescessary dependencies, run the following command
\`\`\`
${answers.iDependencies}
\`\`\`
 

## Usage
${answers.guide}

## License
${answers.license} 

## Contributing
${answers.UserContribution} 

## Test
${answers.testsCommand}


  ## Question
  If you have anyquestions about the repo, open and issue or contact me directly at ${answers.email}. You can find more of my works at [linhklatt](email)

`;
}

module.exports = generateMarkdown;
