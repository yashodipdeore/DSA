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

// var maxProfit = function (arr) {
//   let maxProfit = 0;
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     let profit = arr[i] - min;
//     maxProfit = Math.max(maxProfit, profit);
//   };
//   return maxProfit;
// }

// let arr = [1, 2, 4, 1, 7, 8, 3, 9, 10];
// console.log(maxProfit(arr));



//SECTION - Best Time to Buy and Sell Stock II

// function maxProfit(prices) {
//   let profit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i - 1]) {
//       profit += prices[i] - prices[i - 1];
//     };
//   };

//   return profit;
// };

// let prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));





//SECTION -  given an array of colors

//replace the nums with colours
// let arr = [0, 1, 2, 0, 0, 1, 1, 0, 0, 2, 1, 2];
// let j = 0;//0
// let k = arr.length - 1;//2
// let i = 0; //curr indx

// while (i < k) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//     i++;
//   } else if (arr[i] == 2) {
//     let temp = arr[i];
//     arr[i] = arr[k];
//     arr[k] = temp;
//     k--;
//   } else {
//     i++;
//   }
// };

// console.log(arr);


//SECTION -  max sub Array algorithm

// function maxSubArray(nums) {
//   let max = -Infinity;
//   let sum = 0;

//   for (leti = 0; i < nums.length; i++) {
//     sum += sum[i];
//     max = Math.max(max, sum);
//     if (sum < 0) sum = 0;
//   }

//   return max;
// }

// console.log(maxSubArray);


//SECTION - Most occured elemnts in the array

// function majorityElement(arr) {
//   let ans = arr[0];
//   let count = 1;

//   for (let i = 1; i < arr.length; i++) {
//     if (count == 0) {
//       ans = arr[i];
//       count = 1;
//     } else if (arr[i] == ans) {
//       count++;
//     } else {
//       count--;
//     }
//   };

//   return ans;
// };

// console.log(majorityElement([3, 1, 4, 5, 1, 6, 7, 5, 6, 3, , 1, 1]));




//SECTION - Trap rain water

function Trap(height) {
  //creating Array
  let left = new Array(height.length);
  let right = new Array(height.length);

  //Getting Max values of left and right
  let maxLeft = height[0];
  let maxRight = height[height.length - 1];

  //Assigning the values to left and right array
  left[0] = maxLeft;
  right[right.length - 1] = maxRight;

  let ans = 0;

  for (let i = 1; i < height.length; i++) {
    maxLeft = Math.max(height[i], maxLeft);
    left[i] = maxLeft;
  };

  for (let i = height.length - 2; i >= 0; i--) {
    maxRight = Math.max(height[i], maxRight);
    right[i] = maxLeft;
  };

  for (let i = 0; i < height.length; i++) {
    ans += (Math.min(left[i], right[i])) - height[i];
  }

  return ans;
};


console.log(Trap([2, 5, 2, 1, 0, 7]));








