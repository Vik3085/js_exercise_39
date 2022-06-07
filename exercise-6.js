class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(area) {
  for (let key in area) {
    if (key === 'side') {
        return area.side * area.side
    } else {
        if (key === 'width') {
            return area.width * area.height
        } else {
            if (key === 'radius') {
                return area.radius * area.radius * Math.PI
            }
        }
    }
}
}
}


const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));