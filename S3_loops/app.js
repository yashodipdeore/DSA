let num = Number(prompt('Enter the number : '));
const random = Math.floor(Math.random() * 100 + 1);

if (isNaN(num)) {
  alert('Wrong Input:');
} else {
  while (num !== random) {
    if (num > random) {
      alert(random);
      num = Number(prompt('Num is less than you gues !'));
    } else if (num < random) {
      num = Number(prompt('Num is more than you gues !'));
    }
  }
  alert('You Won !');
}
