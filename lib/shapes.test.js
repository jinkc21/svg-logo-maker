// require shapes.js for classes to test
const {Shapes, Triangle, Circle, Square} = require("./shapes.js")

// test to see if shape inputs and outputs are the same.
describe('Shapes', () => {
    it ('should take in parameters based off input', () => {
        const newShape = new Shapes('ABC', "blue", "red");
        let expectedOutput = {
            logoText: "ABC",
            textColor: "blue",
            shapeColor: "red",
        }
        expect(newShape).toEqual(expectedOutput)
    })
})

// test to see if triangle inputs and outputs are the same.
describe('Triangle', () => {
    it ('should return a triangle with text and colors', () => {
        const newTriangle = new Triangle('ABC', 'red', 'yellow');
        let expectedOutput = {"logoText": "ABC", "shapeColor": "yellow", "textColor": "red"}
        expect(newTriangle).toEqual(expectedOutput)
    })
})

// test to see if circle inputs and outputs are the same.
describe('Circle', () => {
    it ('should return a circle with text and colors', () => {
        const newCircle = new Circle('ABC', 'red', 'yellow');
        let expectedOutput = {"logoText": "ABC", "shapeColor": "yellow", "textColor": "red"}
        expect(newCircle).toEqual(expectedOutput)
    })
})

// test to see if triangle inputs and outputs are the same.
describe('Triangle', () => {
    it ('should return a square with text and colors', () => {
        const newSquare = new Square('ABC', 'red', 'yellow');
        let expectedOutput = {"logoText": "ABC", "shapeColor": "yellow", "textColor": "red"}
        expect(newSquare).toEqual(expectedOutput)
    })
})