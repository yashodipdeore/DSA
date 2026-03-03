//SECTION - 1. left rotation by 1 element

let arr = [1, 2, 3, 4, 5];

let firstEl = arr[0];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i + 1];
}
arr[(arr.length - 1)] = firstEl;
console.log(arr);
