// How do you implement a function to check if a number is prime?

// Prime numbers are natural numbers that are divisible by only 1 and the number itself. 

let num = Number(Date.now());

const checkPrime = (num) => {
  if (num <= 1) {
    return num + " is not a prime number";
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return num + " is not a prime number";
    }
  }

  return num + " is a prime number";
};

console.log(checkPrime(num));
