/*
Most primitives (booleans, numbers, undefined) are constant space
Strings require O(n) space, where n is string length
Reference types are also O(n), where n = length of array or number of keys in object
*/

function findMaxElement(arr) {
  // Base Case
  if (arr.length === 0) {
    return -1;
  }

  let maxElement = Number.MIN_VALUE;
  for (const element of arr) {
    if (element > maxElement) {
      maxElement = element;
    }
  }

  return maxElement;
}
