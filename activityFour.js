const num = 10;
const isDivisibleByFive = num % 5 == 0;
const isDivisibleByThree = num % 3 == 0;
const isDivisibleByThreeAndFive = isDivisibleByFive & isDivisibleByThree;

if (isDivisibleByThreeAndFive) {
    console.log("FizzBuzz!");
    return;
}

if (isDivisibleByFive) {
  console.log("Buzz!");
  return;
}

if (isDivisibleByThree) {
    console.log("Fizz!");
    return;
}

console.log(num);