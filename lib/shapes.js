
class Shapes {
    constructor(logoText, textColor, shapeColor) {
       this.logoText = logoText;
       this.textColor = textColor;
       this.shapeColor = shapeColor;
    }
}

class Triangle extends Shapes {
    render(){
       return `<path d="M24 22h-24l12-20z" fill=${this.shapeColor} />`
   }
}

class Circle extends Shapes {
    render() {
      return  `<circle width="200" height="200" x="10" y="10" rx="20" ry="20" fill=${this.shapeColor} />`
    }
}

class Square extends Shapes {
    render() {
       return `<rect width="200" height="200" x="10" y="10" rx="20" ry="20" fill=${this.shapeColor} />`
    }
}



function renderText () {

}



function generateShapes(data) {
    let shape;
    if (data.shape === 'triangle') {
        shape = new Triangle (data.logoText, data.textColor, data.shapeColor)
    }
    else if (data.shape === 'circle') {
        shape = new Circle (data.logoText, data.textColor, data.shapeColor)
    }
    else {
        shape = new Square (data.logoText, data.textColor, data.shapeColor)
    }
    console.log(shape)
    return `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
 ${shape.render()}
</svg>
    `
}

module.exports = generateShapes