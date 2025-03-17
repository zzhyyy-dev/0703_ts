/**
 * Reverses the order of elements in an array.
 * @param array The input array of any type.
 * @returns A new array with elements in reversed order.
 */
function reverseArray<T>(array: T[]): T[] {
  return array.slice().reverse();
}
const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));
const words = ["apple", "banana", "cherry"];
console.log(reverseArray(words));
