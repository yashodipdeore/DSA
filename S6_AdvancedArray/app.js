//SECTION - 1. left rotation by 1 element

// let arr = [1, 2, 3, 4, 5];

// let firstEl = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[(arr.length - 1)] = firstEl;
// console.log(arr);



//SECTION - 1. Right rotation by 1 element

let arr = [1, 2, 3, 4, 5];

let lastEl = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}

arr[0] = lastEl;
console.log(arr);

