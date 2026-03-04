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



//SECTION - 5. Right rotation by k element Best Way
let arr = [1, 2, 3, 4, 5];
let temp = Array(arr.length);

let n = 1;
let k = n % arr.length;
console.log(k);


for (let i = 0; i < arr.length; i++) {
  temp[i] = arr[(i + k) % arr.length];
}

console.log("Original Array : ", arr);
console.log("New Array : ", temp);










