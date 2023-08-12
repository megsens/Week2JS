const num = 2002;
const numberAsText = `${num}`;

const length = numberAsText.length / 2; //finds the middle point
let adaptedLength = length; //incase the length is odd, cut out the middle character
if (length % 2 !== 0) {
  adaptedLength = adaptedLength + 1; //addition for the second half if length is odd
}

const numberFirstHalf = numberAsText.substring(0, length); //gets the first half of the input
const numberSecondHalf = numberAsText.substring(adaptedLength); //gets the second half of the input

for (let i = 0; i < length; i++) {
  //loops though half of the whole text
  const characterFirstHalf = numberFirstHalf[i]; //gets the loop iteration character (from start) of the first half
  const characterSecondHalf =
    numberSecondHalf[numberSecondHalf.length - (i + 1)]; //gets the loop iteration character (from end) of the second half
  if (characterFirstHalf !== characterSecondHalf) {
    //checks if the two characters are not the same
    console.log("Fail");
    return;
  }
}

//after loop, all characters matched
console.log("successful");