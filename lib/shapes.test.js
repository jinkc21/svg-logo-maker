const {generateShapes, Shapes, Triangle, Circle, Square} = require("./shapes.js")


describe('Shapes', () => {
    it ('should take in parameters based off input', () => {
        const newShape = new Shapes('ABC', "blue", "red");
        const expectedOutput = {
            logoText: "ABC",
            textColor: "blue",
            shapeColor: "red",
        }
        expect(newShape).toEqual(expectedOutput)
    })
})

describe('Triangle', () => {
    it ('should return a triangle with text and colors', () => {
        const newTriangle = generateShapes(new Triangle('yellow', 'red', 'ABC'));
        const expectedOutput = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="10" y="10" fill="ABC" /><text x="70" y="120" font-size="4em" fill="red">yellow</text></svg>`
        expect(newTriangle).toEqual(expectedOutput)
    })
})