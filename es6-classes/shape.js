/* exported Shape */
class Shape {
  constructor(perimeter, area) {
    this.perimeter = perimeter;
    this.area = area;
  }

  describe(Shape) {
    return `This shape has a perimeter of ${this.perimeter} and an area of ${this.area}.`;
  }
}

const shape1 = new Shape(13, 14);
console.log('Value of shape1:', shape1);

const shape2 = new Shape(1, 2);
console.log('Value of shape2:', shape2);
