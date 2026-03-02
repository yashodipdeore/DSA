import promptSync from "prompt-sync";
const prompt = promptSync();
//NOTE - Array is a lenear data structure
//SECTION - Array Implimentation
//let arr = [];

// arr.push(10);
// arr.push('Yash');
// arr.push(30);
// arr.push(true);
// arr.push(50);

// console.log(arr);
// console.log(typeof arr);

//---------------------------

// let arr = new Array(3);
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;

// console.log(arr);
// console.log(typeof arr);


//------------------------------------------------
//------------------------------------------------

// let arr = new Array(5);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt(`Enter the value of array at index ${i} : `));
// };

// console.log(arr);


//------------------------------------------------
//------------------------------------------------

// //Sum of all elements
// let arr = [10, 20, 30, 40, 50, 60];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// };


// console.log(arr);
// console.log('Sum of array given above is :');
// console.log('sum =', sum);






//------------------------------------------------
//------------------------------------------------

//Find the max number
// let arr = [10, 20, 300, 40, 50, 60];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   max = (max > arr[i]) ? max : arr[i];
// };

// console.log(max);


//------------------------------------------------
//------------------------------------------------

//Find the 2 max number
let arr = [1000, 20, 300, 40, 50, 60];

//to find the max from specified ayyar indx
let max = Math.max(arr[0], arr[1]);

//to find the min from specified ayyar indx
let secondMax = Math.min(arr[0], arr[1]);


for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax) {
    secondMax = arr[i];
  }
};

console.log(max, secondMax);


