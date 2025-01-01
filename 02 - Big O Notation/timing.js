function sumUpTo1(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
}

function sumUpTo2(num) {
  return (num * (num + 1)) / 2;
}

let t1 = performance.now();
sumUpTo1(100000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

let t3 = performance.now();
sumUpTo2(100000000);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);