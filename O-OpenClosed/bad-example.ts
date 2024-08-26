//bad-example.ts

class Rectangle {
    constructor(
        public width: number,
        public height: number
    ) {}
}

class Circle {
    constructor(public radius: number) {}
}

class AreaCalculator {
    calculateTotalArea(shapes: (Rectangle | Circle)[]): number {
        return shapes.reduce((sum, shape) => {
            if (shape instanceof Rectangle) {
                return sum + shape.width * shape.height;
            } else if (shape instanceof Circle) {
                return sum + Math.PI * shape.radius ** 2;
            }
            return sum;
        }, 0);
    }
}

// Usage
const rectangle = new Rectangle(5, 4);
const circle = new Circle(3);

const calculator = new AreaCalculator();
const totalArea = calculator.calculateTotalArea([rectangle, circle]);

console.log(`Total area: ${totalArea}`);

// Adding a new shape (e.g., Triangle) requires modifying AreaCalculator
class Triangle {
    constructor(
        public base: number,
        public height: number
    ) {}
}

// AreaCalculator needs to be modified to handle Triangle
class ModifiedAreaCalculator {
    calculateTotalArea(shapes: (Rectangle | Circle | Triangle)[]): number {
        return shapes.reduce((sum, shape) => {
            if (shape instanceof Rectangle) {
                return sum + shape.width * shape.height;
            } else if (shape instanceof Circle) {
                return sum + Math.PI * shape.radius ** 2;
            } else if (shape instanceof Triangle) {
                return sum + 0.5 * shape.base * shape.height;
            }
            return sum;
        }, 0);
    }
}

// This violates OCP as we had to modify the existing AreaCalculator class
