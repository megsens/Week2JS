const num1 = 9;
const num2 = 2;
const num = num1 + num2;

const isEven = num % 2 == 0;

if (isEven) {
  console.log(num);
  return;
}
console.log(num1 * num2);