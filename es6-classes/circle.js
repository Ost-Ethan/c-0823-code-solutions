/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(2 * Math.PI * radius, Math.PI * (radius * radius));
    this.radius = radius;
  }

  describe(shape) {
    return `${super.describe()}The circle's radius is ${this.radius}.`;
  }
}

const circle1 = new Circle(20);
console.log('Value of circle1', circle1);
