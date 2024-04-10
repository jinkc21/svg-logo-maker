const inquirer = require('inquirer');
const fs = require('fs');
const generateShapes = require('./lib/shapes.js')


const questions = [
    {
        type: 'input',
        message: 'What is the text for the logo? (1-3 characters required)',
        name: 'logo-text'
    },
    {
        type: 'list',
        message: 'Select a color for the text.',
        name: 'text-color',
        choices: "red, orange, yellow, green, blue, indigo, violet",
    },
    {
        type: 'list',
        message: 'Select a shape for the logo.',
        name: 'shape',
        choices: 'circle, triangle, square',
    },
    {
        type: 'list',
        message: 'Select a color for the shape.',
        name: 'shape-color',
        choices: "red, orange, yellow, green, blue, indigo, violet",
    },
];

