Number.prototype.isPrime = function () {
  for (let i = 2; i <= Math.sqrt(this); i++) {
    if (this % i === 0) {
      return false;
    }
  }
  return true;
};

const { performance } = require("perf_hooks");
const start = performance.now();
let primeCount = 0;
let num = 2;
while (primeCount < 1e6) {
  if (num.isPrime()) {
    primeCount++;
  }
  num++;
}

console.log(`The 1,000,000th prime is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
