const inquirer = require("inquirer");
const fs = require('fs')

var question = [{
        name: "title",
        type: "input",
        message: "What is the title of your project?",
        default: "I don't have a title.."
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        name: "description",
        type: "input",
        message: "Write a description for your project",
        default: "I am too lazy to write one.."
    },
    {
        name: "installation",
        type: "input",
        message: "What are the steps to install your project?",
        default: "No need to install anything",
    },
    {
        name: "usage",
        type: "input",
        message: "Provide insctructions here",
        default: "I am too lazy to provide instructions"
    },
    {
        name: "credits",
        type: "input",
        message: "List collaborators",
        default: "I am the only collaborator",
    },
    {
        name: "license",
        type: "list",
        choices: ["mit", "afl-3.0", "apache-2.0", "artistic-2.0", "bsl-1.0", "bsd-2-clause", "cc", "wtfpl"],
    },
    {
        name: "badges",
        type: "input",
        message: "List badges",
        default: "I am not listing badges",
    },
    {
        name: "contributor",
        type: "input",
        message: "Who else contributed?",
        default: "just me, myself, and I",
    }
]

// So you can use the name: _____ as a variable and save that in a object
// hard code the titles and subtitle of the readeME

inquirer.prompt(question).then(function (answers) {

    const readMEFile =
        `## Description
    
${answers.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Github

${answers.github}

## Email 

${answers.email}
    
## Installation
    
${answers.installation}
    
## Usage
    
${answers.usage}
    
## Credits
    
${answers.credits}
    
## License
    
${answers.license}
    
## Badges
    
${answers.badges}
    
## Contributing
    
${answers.contributor}

## Github pages / Repo:
[Github Repo](https://github.com/mariohernandezk10/generate_readme)
[Screencastify video](https://drive.google.com/file/d/1PpYHDfIOqGJDcIOZVmVczmnniSI56Uww/view)

## Questions

If you have any questions about the repo, 
open an issue or contact me directly at 
mariohernandezk10@gmail.com. You can 
find more of my work at [MarioHernandez]
(https://github.com/mariohernandezk10/).`

    fs.writeFile('README1.md', ``, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    fs.appendFileSync('README1.md', `# ${answers.title}\n`, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    fs.appendFileSync('README1.md', readMEFile, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});