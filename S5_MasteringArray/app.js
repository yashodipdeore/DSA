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

//SECTION -  Sum of all elements
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

//SECTION -  Find the max number
// let arr = [10, 20, 300, 40, 50, 60];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   max = (max > arr[i]) ? max : arr[i];
// };

// console.log(max);


//------------------------------------------------
//------------------------------------------------

//SECTION - Find the 2 max number
// let arr = [40, 40, 40, 50, 40, 40, 50];

// //to find the max from specified ayyar indx
// let max = Math.max(arr[0], arr[1]);

// //to find the min from specified ayyar indx
// let secondMax = Math.min(arr[0], arr[1]);


// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secondMax = max;
//     max = arr[i];
//   } else if (arr[i] > secondMax && arr[i] < max) {
//     secondMax = arr[i];
//   }
// };

// console.log(max, secondMax);



//------------------------------------------------
//------------------------------------------------

//SECTION - Reverse array with extra space
// let arr = [10, 20, 30, 40, 50];
// let temp = new Array(arr.length);

// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i];
//   j++;
// };

// console.log(arr);
// console.log(temp);


//------------------------------------------------
//------------------------------------------------

//SECTION - Reverse array without extra space
// let arr = [10, 20, 30, 40, 50];

// let i = 0;
// let j = arr.length - 1;

// while (i != j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }

// console.log(arr);



//------------------------------------------------
//------------------------------------------------

//SECTION - Prefixing all the zero's/0 and post Pixing One's/1
// let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];

// let i = 0;
// let j = 0;

// while (i < arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++
//   }
//   i++
// }


// console.log(arr);




//------------------------------------------------
//------------------------------------------------

let arr = [-1, -1, 0, 1, 0, -1, 1, 0, 0];

let i = 0;
let j = 0;

while (i < arr.length) {
  if (arr[i] < 0 || arr[i] == 1) {
    if (arr[i] == 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++
    }
    i++
  }
}

console.log(arr);