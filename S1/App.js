// let a = 10;
// let b = '20';
// let c = 30;

// //NOTE - concatenation sum of num and string returns aString;
// console.log(a + b);

// console.log("Sum of 10 and 30 is  :" + a + c);
// //Returns a string

// console.log("Sum of 10 and 30 is  :" + (a + c));
// // Returns a Number/integer

// console.log("Sum of 10 and 30 is  :" + a);
// //Returns a string

// console.log(a + c + "is sum of 10 and 20 ");
// // Returns a Number/integer


// //---------------------------------------------

// //NOTE - when you do the operations given below, the string is converted into the integer by js engine and the process is called as :"type coercion"
// console.log('1' - 1);
// console.log(typeof ('1' - 1));
// console.log(1 - '1');
// console.log(typeof (1 - '1'));


// console.log('1' / 1);
// console.log(typeof ('1' / 1));
// console.log(1 / '1');
// console.log(typeof (1 / '1'));


// console.log('3' * 1);
// console.log(typeof ('1' * 1));
// console.log(1 * '3');
// console.log(typeof (1 * '1'));



// //---------------------------------------------

// // Takes string as an input by default
// let age = prompt("Enter you Age : ");
// console.log(typeof age); //Returns a string
// console.log(age);

// age = Number(age); //converting a string to number
// console.log(typeof age);//Returns a number
// console.log(age);



// let marks = Number(prompt("Enter you Marks : "));
// console.log(typeof marks);//Returns a number
// console.log(marks);


// //-------------------------------------------------
// console.log("\n \n \n swapping \n \n");
// console.log("Swapping Method 1 : ");
// // 1.
// let a1 = 10;
// let b1 = 20;
// console.log("A1 :", a1, "B1 :", b1);

// let c1 = a1;
// a1 = b1;
// b1 = c1;
// console.log("A1 :", a1, "B1 :", b1);


// // 2.
// console.log("Swapping Method 2 : ");

// let a2 = 10;
// let b2 = 20;

// a2 = a2 + b2; //10+20 = 30
// b2 = a2 - b2;// 30-20 = 10
// a2 = a2 - b2;//30-10 = 20
// console.log("A2 :", a2, "B2 :", b2);


// //3.
// console.log("Swapping Method 3 : ");
// let a3 = 10;
// let b3 = 20;
// [a3, b3] = [b3, a3];
// console.log("A3 :", a3, "B3 :", b3);


//----------------------------------------------------------------

// //NOTE - '/' always returns a Quotient
// //NOTE - '%' alway returns a remainder


// let a4 = 5;
// let b4 = 2;

// console.log(a4 / b4); // 2.5
// console.log(a4 % b4); // 1


// //-----------------------------------------------------------

// // 1.
// let i = 11;
// i = i++ + ++i;

// console.log(i);


// // 2.
// let a = 11, b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log('a', a);
// console.log('b', b);
// console.log('c', c);


// // 3.
// let d = true; //1
// d++;
// console.log(d);


// // 4.
// //Error - Invalid left-hand side expression in postfix operation
// let e = 10++;
// console.log(e);


// //5
// console.log(Math.round(20.5)); // Returns 21
// console.log(Math.round(20.2));// Returns 20

// console.log(Math.ceil(10.2)); // Returns 11
// console.log(Math.ceil(10.9)); // Returns 11
// console.log(Math.floor(10.9)); // Returns 10

// console.log(Math.trunc(19.99));// Returns 19

// console.log(Math.pow(2, 3)); // Returns 8
// console.log(Math.sqrt(69)); // Returns 8.306623862918075


// // Returns a random number between 0 and 1
// let randomNum = Math.random();

// // fixes the number to 2 decimal places
// console.log(randomNum.toFixed(2));


// //sqrt of s * (s-a) * (s-b) * (s-c)
// let a = 5;
// let b = 4;
// let c = 3;

// let s = (a + b + c) / 2;
// console.log(s);


// console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));

