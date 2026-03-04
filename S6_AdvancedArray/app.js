//SECTION - 1. left rotation by 1 element

// let arr = [1, 2, 3, 4, 5];

// let firstEl = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[(arr.length - 1)] = firstEl;
// console.log(arr);



//SECTION - 2. Right rotation by 1 element

// let arr = [1, 2, 3, 4, 5];

// let lastEl = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }

// arr[0] = lastEl;
// console.log(arr);



//SECTION - 3. left and right rotation by k element

// let arr = [1, 2, 3, 4, 5];

// let n = 3;
// for (let i = 0; i < n; i++) {
//   let lastEl = arr[arr.length - 1];
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = lastEl;
// };

// console.log(arr);


//SECTION - 4. left and right rotation by k element
// let arr = [1, 2, 3, 4, 5];
// let n = 1;
// let k = n % arr.length;

// for (let i = 0; i < k; i++) {
//   let firstEl = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = firstEl;
// };

// console.log(arr);



//SECTION - 5. left rotation by k element Best Way but with extra space
// let arr = [1, 2, 3, 4, 5];
// let temp = Array(arr.length);

// let n = 1;
// let k = n % arr.length;
// console.log(k);


// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }

// console.log("Original Array : ", arr);
// console.log("New Array : ", temp);



//SECTION - 6. Most efficient algorithm
// let arr = [1, 2, 3, 4, 5];
// let k = 2;

// //Function calls for right rotation
// reverse(0, arr.length - 1);
// reverse(k, arr.length - 1);
// reverse(0, k - 1);

// //function calls for left rotation
// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// reverse(0, arr.length - 1);

// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   };
// };

// console.log(arr);



//SECTION - 7. remove duplicates from sorted array

// let arr = [1, 1, 2, 3, 4, 4, 5, 5, 6];

// let j = 1;
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] != arr[i + 1]) {
//     arr[j] = arr[i + 1];
//     j++;
//   };
// };

// console.log(arr);



//SECTION - Merge sort array

let arr1 = [2, 5, 6];
let arr2 = [1, 3, 4, 8];


let temp = new Array(arr1.length + arr2.length);
let i = 0;
let j = 0;
for (let k = 0; k < temp.length; k++) {
  if (arr1[i] < arr2[j]) {
    temp[k] = arr1[i];
    i++;
  } else {
    temp[k] = arr2[j];
    j++;
  }
};

console.log(temp);





