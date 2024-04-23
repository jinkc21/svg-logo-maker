// defines shapes class
class Shapes {
    constructor(logoText, textColor, shapeColor) {
       this.logoText = logoText;
       this.textColor = textColor;
       this.shapeColor = shapeColor;
    }
}

// defines triangle class and renders shape
class Triangle extends Shapes {
    render(){
       return `<path d="M300 240h-300l150-220z" fill="${this.shapeColor}" /><text text-anchor="middle" x="150" y="160" font-size="4em" fill="${this.textColor}">${this.logoText}</text>`
   }
}

// defines circle class and renders shape
class Circle extends Shapes {
    render() {
      return  `<circle cx="100" cy="100" r="100" fill='${this.shapeColor}'/><text x="60" y="120" font-size="4em" fill="${this.textColor}">${this.logoText}</text>`
    }
}

// defines square class and renders shape
class Square extends Shapes {
    render() {
       return `<rect width="200" height="200" x="10" y="10" fill="${this.shapeColor}" /><text x="70" y="120" font-size="4em" fill="${this.textColor}">${this.logoText}</text>`
    }
}

// function to generate logo
function generateLogo(data) {
    let shape;
    if (data.textColor === data.shapeColor) {
        console.log('Text color cannot be the same as shape color!')
        return
    }
    else if (data.shape === 'triangle') {
        shape = new Triangle (data.logoText, data.textColor, data.shapeColor)
    }
    else if (data.shape === 'circle') {
        shape = new Circle (data.logoText, data.textColor, data.shapeColor)
    }
    else {
        shape = new Square (data.logoText, data.textColor, data.shapeColor)
    }
    console.log(shape)
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`
}

// exports to index to generate logo
module.exports = generateLogo