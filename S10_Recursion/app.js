//SECTION - 1. Flow of exexution in function
// greet();
// function greet() {
//   console.log("Good morning pineapple !");
//   enjoy();
//   console.log('End of Greet');
// };

// function enjoy() {
//   console.log('Enjoy ho raha hai guys 🤣🤣');
//   temp();
// };

// function temp() {
//   console.log('Kuch kr rhe ho kya ?');
// };


//SECTION - 2. Recursion function countDown
// function countDown(num) {
//   if (num <= 0) return;
//   console.log('Yashodip ', num);
//   countDown(num - 1);
// }

// console.log(countDown(6));


//SECTION - 3. Factorial of a number using recursion

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5)); // 120


//SECTION - 4. Fibonacci series using recursion

//ANCHOR - Fibonacci Of "N" Terms :-
function fiboNTerms(n, first, second) {
  if (n == 0) return;
  let third = first + second;
  process.stdout.write(third + " ");
  fiboNTerms(n - 1, second, third);
}

let n = 10;
process.stdout.write(0 + " " + 1 + " ");
fiboNTerms(n - 2, 0, 1);