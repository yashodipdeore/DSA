//SECTION - 1. left rotation by 1 element

// let prices = [1, 2, 3, 4, 5];

// let firstEl = prices[0];
// for (let i = 0; i < prices.length - 1; i++) {
//   prices[i] = prices[i + 1];
// }
// prices[(prices.length - 1)] = firstEl;
// console.log(prices);



//SECTION - 2. Right rotation by 1 element

// let prices = [1, 2, 3, 4, 5];

// let lastEl = prices[prices.length - 1];
// for (let i = prices.length - 1; i > 0; i--) {
//   prices[i] = prices[i - 1];
// }

// prices[0] = lastEl;
// console.log(prices);



//SECTION - 3. left and right rotation by k element

// let prices = [1, 2, 3, 4, 5];

// let n = 3;
// for (let i = 0; i < n; i++) {
//   let lastEl = prices[prices.length - 1];
//   for (let i = prices.length - 1; i > 0; i--) {
//     prices[i] = prices[i - 1];
//   }
//   prices[0] = lastEl;
// };

// console.log(prices);


//SECTION - 4. left and right rotation by k element
// let prices = [1, 2, 3, 4, 5];
// let n = 1;
// let k = n % prices.length;

// for (let i = 0; i < k; i++) {
//   let firstEl = prices[0];
//   for (let i = 0; i < prices.length - 1; i++) {
//     prices[i] = prices[i + 1];
//   }
//   prices[prices.length - 1] = firstEl;
// };

// console.log(prices);



//SECTION - 5. left rotation by k element Best Way but with extra space
// let prices = [1, 2, 3, 4, 5];
// let temp = Array(prices.length);

// let n = 1;
// let k = n % prices.length;
// console.log(k);


// for (let i = 0; i < prices.length; i++) {
//   temp[i] = prices[(i + k) % prices.length];
// }

// console.log("Original Array : ", prices);
// console.log("New Array : ", temp);



//SECTION - 6. Most efficient algorithm
// let prices = [1, 2, 3, 4, 5];
// let k = 2;

// //Function calls for right rotation
// reverse(0, prices.length - 1);
// reverse(k, prices.length - 1);
// reverse(0, k - 1);

// //function calls for left rotation
// reverse(0, k - 1);
// reverse(k, prices.length - 1);
// reverse(0, prices.length - 1);

// function reverse(i, j) {
//   while (i < j) {
//     let temp = prices[i];
//     prices[i] = prices[j];
//     prices[j] = temp;
//     i++;
//     j--;
//   };
// };

// console.log(prices);



//SECTION - 7. remove duplicates from sorted array

// let prices = [1, 1, 2, 3, 4, 4, 5, 5, 6];

// let j = 1;
// for (let i = 0; i < prices.length - 1; i++) {
//   if (prices[i] != prices[i + 1]) {
//     prices[j] = prices[i + 1];
//     j++;
//   };
// };

// console.log(prices);



//SECTION - Merge sort array

// let arr1 = [2, 5, 6];
// let arr2 = [1, 3, 4, 8, 10, 11];

// let temp = new Array(arr1.length + arr2.length);
// let i = 0;
// let j = 0;

// for (let k = 0; k < temp.length; k++) {

//   if (i >= arr1.length) {
//     temp[k] = arr2[j++];
//   }
//   else if (j >= arr2.length) {
//     temp[k] = arr1[i++];
//   }
//   else if (arr1[i] <= arr2[j]) {
//     temp[k] = arr1[i++];
//   }
//   else {
//     temp[k] = arr2[j++];
//   }

// }

// console.log(temp);
// console.log(temp.length);



//SECTION - Best time to buy and sell the stock

var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    let profit = prices[i] - min;
    maxProfit = Math.max(maxProfit, profit);
  };
  return maxProfit;
}

let prices = [1, 2, 4, 1, 7, 8, 3, 9, 10];
console.log(maxProfit(prices));



