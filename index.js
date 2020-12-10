var inquirer = require("inquirer");

var question = [
    {
        name: "userName",
        type: "input",
        message: "what is you name?",
        default: "I don't have a name.."
    },
    {
        name: "age",
        type: "input",
        message: "what is you age?",
        default: "I lost count.."
    },
    {
        name: "born",
        type: "list",
        message: "Where were you born?",
        choices: ["US", "France", "Mexico"],
        default: "I been everywhere. I am everywhere. I am like the wind and gravity.."
    }
]

inquirer.prompt(question).then(function(loggingAnswer){
    console.log("Name: " + loggingAnswer.userName)
    console.log("Age: " + loggingAnswer.age)
    console.log("Born: " + loggingAnswer.born)
});