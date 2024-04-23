// require dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/logo.js");

// question prompts to create logo
const questions = [
  {
    type: "input",
    message: "What is the text for the logo? (1-3 characters required)",
    name: "logoText",
    validate: logoTextInput => {
      if (logoTextInput) {
          return true;
      } else {
          console.log('Logo text is required!');
          return false;
      }
  }
  },
  {
    type: "list",
    message: "Select a color for the text.",
    name: "textColor",
    choices: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
  },
  {
    type: "list",
    message: "Select a shape for the logo.",
    name: "shape",
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: "list",
    message: "Select a color for the shape.",
    name: "shapeColor",
    choices: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
  },
];

// function to write file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) {
      console.log("Error: ", error);
    }
    console.log("New File Created");
  });
}

//  function for inquirer to prompt questions and generate logo
function init() {
  inquirer
  .prompt(questions)
  .then(function (data) {
    console.log(data);
    let result = generateLogo(data);
    // console.log('Results: ', result);
    let renderLicense = writeToFile(`./examples/${data.logoText}.svg`, result);
  })
  .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
