#! /usr/bin/env node
class ScientificCalculator {
    // Basic arithmetic operations
    add(num1, num2) {
        return num1 + num2;
    }
    subtract(num1, num2) {
        return num1 - num2;
    }
    multiply(num1, num2) {
        return num1 * num2;
    }
    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
    }
    // Scientific operations
    squareRoot(num) {
        if (num < 0) {
            throw new Error("Cannot calculate square root of a negative number");
        }
        return Math.sqrt(num);
    }
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
    // Trigonometric operations (in radians)
    sine(angle) {
        return Math.sin(angle);
    }
    cosine(angle) {
        return Math.cos(angle);
    }
    tangent(angle) {
        return Math.tan(angle);
    }
}
// Example usage
let calculator = new ScientificCalculator();
// Basic arithmetic operations
console.log("5 + 3 =", calculator.add(5, 3));
console.log("5 - 3 =", calculator.subtract(5, 3));
console.log("5 * 3 =", calculator.multiply(5, 3));
console.log("5 / 3 =", calculator.divide(5, 3));
// Scientific operations
console.log("Square root of 16 is", calculator.squareRoot(16));
console.log("2 to the power of 3 is", calculator.power(2, 3));
// Trigonometric operations (angle in radians)
console.log("Sine of π/6 is", calculator.sine(Math.PI / 6));
console.log("Cosine of π/4 is", calculator.cosine(Math.PI / 4));
console.log("Tangent of π/3 is", calculator.tangent(Math.PI / 3));
export {};
