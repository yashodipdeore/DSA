//SECTION - Topic 1

// let ans = Number(prompt('What is your age ?'));

// //NOTE - NaN === NaN = False (both are not equal);
// if (isNaN(ans)) {
//   console.log('Wrong Input !');
// }
// else if (ans >= 18) {
//   console.log('You can vote.');
// }
// else {
//   console.log('You can not vote.');
// }


//SECTION - Topic 2
// let amount = Number(prompt("what is the final amount ?"));

// if (amount > 0 && amount <= 5000) {
//   console.log(amount);
// } else if (amount > 5000 && amount <= 7000) {
//   console.log(amount - (amount * 0.05));
// } else if (amount > 7000 && amount <= 9000) {
//   console.log(amount - (amount * 0.07));
// } else if (amount > 9000 && amount <= 12000) {
//   console.log(amount - (amount * 0.10));
// } else {
//   console.log('Invalid Input !');
// };



//SECTION - Topic 3

// let Unit = 700;
// let bill = 0;

// if (Unit > 400) {
//   bill += (Unit - 400) * 13;
//   Unit = 400;
// }
// if (Unit > 200 && Unit <= 400) {
//   bill += (Unit - 200) * 8;
//   Unit = 200;
// }
// if (Unit > 100 && Unit <= 200) {
//   bill += (Unit - 100) * 6;
//   Unit = 100;
// }
// if (Unit > 0 && Unit <= 100) {
//   bill += Unit * 4;
//   Unit = 0;
// }

// console.log(bill);



//!SECTION - Topic 4

// let amount = 5001;

// //Checking for 500's noOfBills
// if (amount >= 500) {
//   const noOfBills = Math.floor(amount / 500);
//   amount = amount % 500;
//   console.log(`There is : ${noOfBills} Bill's of 500 and ${amount} Remains`);
// }

// //checking for 200's noOfBills
// if (amount >= 200) {
//   const noOfBills = Math.floor(amount / 200);
//   amount = amount % 200;
//   console.log(`There is : ${noOfBills} Bill's of 200 and ${amount} Remains`);
// }



// if (amount >= 100) {
//   const noOfBills = Math.floor(amount / 100);
//   amount = amount % 100;
//   console.log(`There is : ${noOfBills} Bill's of 100 and ${amount} Remains`);
// }




// if (amount >= 50) {
//   const noOfBills = Math.floor(amount / 50);
//   amount = amount % 50;
//   console.log(`There is : ${noOfBills} Bill's of 50 and ${amount} Remains`);
// }


// if (amount >= 20) {
//   const noOfBills = Math.floor(amount / 20);
//   amount = amount % 20;
//   console.log(`There is : ${noOfBills} Bill's of 20 and ${amount} Remains`);
// }



// if (amount >= 10) {
//   const noOfBills = Math.floor(amount / 10);
//   amount = amount % 10;
//   console.log(`There is : ${noOfBills} Bill's of 10 and ${amount} Remains`);
// }



// if (amount >= 5) {
//   const noOfBills = Math.floor(amount / 5);
//   amount = amount % 5;
//   console.log(`There is : ${noOfBills} Bill's of 5 and ${amount} Remains`);
// };

// if (amount >= 2) {
//   const noOfBills = Math.floor(amount / 2);
//   amount = amount % 2;
//   console.log(`There is : ${noOfBills} Bill's of 2 and ${amount} Remains`);
// };

// if (amount >= 1) {
//   const noOfBills = Math.floor(amount / 1);
//   amount = amount % 1;
//   console.log(`There is : ${noOfBills} Bill's of 1 and ${amount} Remains`);
// };



//SECTION - Topic 5(Switch case)
//NOTE - when to use switch case.
/* -- use switch case when you want to check for Constan value
such as 4, day, year */

//NOTE - When to use if-else
/*-- Use if-else when you want to check for condtion like (4>=40),(7<9) */


let day = 2;

switch (day) {
  case 1: console.log('mon');
    break;

  case 2: console.log('tue');
    break;

  case 2: console.log('wed');
    break;

  default: console.log('Invalid day !');
};

