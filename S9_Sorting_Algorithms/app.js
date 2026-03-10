//Bubble Sort :-

// let arr = [10, 5, 1, 12, 3];

// let n = arr.length;
// console.log(arr);

// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }


// console.log(arr);


//SECTION -  Selection Sort :-

let arr = [10, 5, 1, 12, 3];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  };

  if (minIndex != i) {
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  };
};

console.log(arr);


