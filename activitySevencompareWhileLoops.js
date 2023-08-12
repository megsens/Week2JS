    // FOR WHILE LOOPS //

for(let index = 0; index < element.length; index++); // - 1st Condition: "for(where to start; condition check; how to increment the specified condition"
// 2nd Condition: "(let index" = what we're looping, "= 0;", we're looping something starting with the index value of "0" (i.e. the beginning),
// 3rd Condition: "index < element.length" serves as a check while the loop is running.
// If that condition is TRUE, the loop will run. However, once the loop is FALSE,
// the loop will break and will not execute the code inside of it.
console.log(index); // - logging the result of "index" to the terminal

// PROS:
// - the most conventional way of coding loops
// - extremely flexible

// CONS: It's easy to get wrong


    // WHILE LOOPS //

    const i = 11;  // User input must be a value under 10 for program to run

    while (i < 10) { // "while (i < 10)" = This is stating that white the user input is under 10, the loop will run
        text += "The number is " + i; 
        i++;
      }
      console.log([i]); // Prints result to the terminal

      // The loop will run over and over again, an infinite amount of times, as long as the VARIABLE (i) is less than 10

      // PROS:
      // - it can run for a long time until the specified condition is met

      // CONS: easy to forget that if the condition the result will always be FALSE
      // this ca cause your program to crash (especially on web browsers)



    // DO WHILE LOOPS //

// // Definition of a Do While: the do while statement creates a loop that
// // executes a specified statement test condition evaluates to FALSE.

// // For Example:

// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// // do {"statement"} - The Loop iterates at least once and then reiterates until "i" is not longer less than "5"
//     // while (condition); - listing numbers UNDER  and UNTIL the value of "5" is the CONDITION

// console.log(result);
// // Expected output: "12345"

// // PROS:
// // - quick and easy way to repeat your code without having to type it out over and over again
// // - works with all browsers
// // you can easily control the flow of the loop by using "break;" and "continue;" statements

// // CONS:
// // - it can be verbose (meaning that the loop itself while doing whatever job you need it to,
// //   can still require a large amount of coding in of itself)
// // - can be imperative