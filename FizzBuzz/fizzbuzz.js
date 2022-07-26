// FIZZ BUZZ

// First get the number from the user
var userInput = parseInt(prompt("Enter a number : "));

// loop through the user input and print a string for multiples of 3 and 5
for (let i = 1; i <= userInput; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.write("FizzBuzz\n");
  } else if (i % 3 == 0) {
    document.write("Fizz\n");
  } else if (i % 5 == 0) {
    document.write("Buzz\n");
  } else {
    document.write(i + "\n");
  }
}
