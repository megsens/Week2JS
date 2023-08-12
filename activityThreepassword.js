const password = "123456789";

if(password.length < 8) {
console.log("Your password must be at least 8 characters in length. Please try again.");
    //Tells user that password must be at least 8 characters long// 
    return false; }

    console.log(password);

// Stretch //

const num = 8;

const isDivisibleByFive = num % 5 == 0;
const isDivisibleByThree = num % 3 == 0;

if (isDivisibleByFive || isDivisibleByThree) {
  console.log("This number is divisible by 3 or 5");
  return;
}
console.log("something else");