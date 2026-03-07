
//SECTION - Checking if a given string is Palindrome or not
let name = "YaY";

let i = 0;
let j = name.length - 1;

while (i != j) {
  if (name.charAt(i) == name.charAt(j)) {
    i++;
    j--;
    console.log('palindrome');
  } else {
    console.log('not palindrome');
    break;
  }
}


