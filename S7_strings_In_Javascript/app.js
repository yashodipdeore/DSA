
//SECTION - Checking if a given string is Palindrome or not
// let str1 = "YaY";

// let i = 0;
// let j = str1.length - 1;

// while (i != j) {
//   if (str1.charAt(i) == str1.charAt(j)) {
//     i++;
//     j--;
//     console.log('palindrome');
//   } else {
//     console.log('not palindrome');
//     break;
//   }
//}



//SECTION -   Toggle the charecters;
// let str1 = "YASHodip";
// let toggle = '';

// for (let i = 0; i < str1.length; i++) {
//   let ch = str1.charCodeAt(i);

//   if (ch >= 65 && ch <= 90) {
//     toggle += String.fromCharCode(ch + 32);
//   } else {
//     toggle += String.fromCharCode(ch - 32);
//   }
// };

// console.log(str1);
// console.log(toggle);



//SECTION - Character frequency count using array hashing

let str1 = 'hello';
let arr = new Array(128).fill(0);

for (let i = 0; i < str1.length; i++) {
  let ch = str1.charCodeAt(i);
  arr[ch] = arr[ch] + 1;
};


console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

