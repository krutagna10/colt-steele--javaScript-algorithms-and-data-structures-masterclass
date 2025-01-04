/*
Rules
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array is constant
*/

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(2);
