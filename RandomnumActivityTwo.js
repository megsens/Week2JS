function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
} // generates random number between 1 and 50

for(let i = 0; i < 1; i++){
    console.log(randomNumber(1, 50));
} // Loops the results six times in a row