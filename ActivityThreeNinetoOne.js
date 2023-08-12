// // const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
// // for (myNum i = arr.length - 1; i >= 0; i--) {
// //     console.log(arr[i]);
// }

let numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9];

Object.keys(numbers).reverse()
		.forEach(function(index) {
			console.log(numbers[index]);
		});