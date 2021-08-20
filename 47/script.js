class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calrArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleRidthText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет ${this.bgColor}`);
    }
}

const div = new ColoredRectangleRidthText(25, 10, 'Htllo world', 'red');

div.showMyProps();
console.log(div.calrArea());



// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calrArea());
// console.log(long.calrArea());