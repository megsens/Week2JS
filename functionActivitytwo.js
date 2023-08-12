// // Activity Two:

// // Original Program

// let orderCount = 0;

// const takeOrder = (topping) => { // "(topping)" is a PARAMETER
//     console.log(`Pizza with ${topping}`); // States to the console that pizza has "x" topping
//     // "x" = "${Topping specified using Template Literal}"
//     orderCount++;
// }
// takeOrder("pineapple"); // Runs function "takeOrder", displays "Pizza with pineapple" to terminal


// Program with two PARAMETERS and a running order count:

let counter = 0;
let topping = chicken;
let base = bbq;
let size = 14; // short hand for 14 inches

const takeOrders = (topping, base, size) => {
    console.log(`Pizza with ${topping}, ${base}, ${size}`);
    counter++;
}
takeOrders();