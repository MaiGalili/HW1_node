//Q1
const number = 123;

//boolean for number divide 1-yes, 0-no.
const divisibleBy2 = Number(number % 2 === 0);
const divisibleBy3 = Number(number % 3 === 0);
const divisibleBy5 = Number(number % 5 === 0);

const result = divisibleBy2 + divisibleBy3 + divisibleBy5;

console.log(result);

//Q2
//is prime number
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // numer is divided so is not prime
  }
  return true;
}

// try all numbers smaller then 237
for (let i = 2; i < 237; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

//Q3
// list of numbers
let array = [0, 3, 66, 0, 32, 30, 0];
let count = 0;
array.forEach((i) => {
  i === 0 ? count++ : count + 0;
});
console.log(count);
