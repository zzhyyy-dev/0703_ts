interface Multiplication {
  (num1: number, num2: number): number;
}
const multiply: Multiplication = (num1, num2) => num1 * num2;
console.log(multiply(5, 3));
console.log(multiply(7, 2));
console.log(multiply(10, 10));
