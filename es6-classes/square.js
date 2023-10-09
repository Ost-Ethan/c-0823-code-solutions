/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width * 4, width * width);
    this.width = width;
  }

  describe(shape) {
    return `${super.describe()}The square's width is ${this.width}.`;
  }
}

const square1 = new Square(3);
console.log('Value of square1:', square1);
