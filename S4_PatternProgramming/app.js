// Number(Prompt-sync package is used) to get the Number(prompt input in terminal
import promptSync from 'prompt-sync';
const prompt = promptSync();


// Q 1.
// )let n = Number(prompt('Enter a number : '));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write('*');
//   }
//   console.log();
// }



// Q 2.
// let n = Number(prompt('Enter a number : '));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write('*');
//   }
//   console.log();
// }



// Q 3.
// let n = Number(prompt('Enter a number : '));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + '');
//   }
//   console.log();
// }


// Q 4.
// let n = Number(prompt('Enter a number : '));
// for (let i = 1; i <= n; i++) {
//   let ch = ['A', 'B', 'C', 'D', 'E'];
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(ch[j] + ' ');
//   }
//   console.log();
// }

// ---------- OR -----------------

// let n = Number(prompt('Enter a number : '));
// for (let i = 1; i <= n; i++) {
//   let ascii = 65;
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + ' ');
//     ascii++;
//   }
//   console.log();
// }



// Q 5.
// let n = Number(prompt('Enter a number : '));
// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(' * ');
//   }
//   console.log();
// }



// Q 6.
// let n = Number(prompt('Enter a number : '));
// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write('   ');
//   };

//   for (let k = 1; k <= (n - i) + 1; k++) {
//     process.stdout.write(' * ');
//   };
//   console.log();
// }


// Q 7.
let n = Number(prompt('Enter a number : '));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j) {
      process.stdout.write('*');
    } else {
      process.stdout.write(' ');
    }
  }
  for (let j = 1; j <= n; j++) {
    if (i + j == 6) {
      if (i == 5 && j == 1) {
        process.stdout.write('');
      } else {
        process.stdout.write('*');
      }
    } else {
      process.stdout.write(' ');
    }
  }
  console.log();
}
