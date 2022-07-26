// PRIME NUMBER CHECKER

// get the user input
var userinput = parseInt(prompt("Enter a number : "));
var isPrime = true;
if (userinput == 1) {
  document.write("1 is not a prime number nor a composite number");
} else if (userinput == 0) {
  document.write("0 is not a prime number");
} else if (userinput < 0) {
  document.write("Negative numbers can not be prime numbers");
} else if (userinput > 1) {
  for (let i = 2; i < userinput; i++) {
    if (userinput % i == 0) {
      document.write(userinput + " is not a prime number");
      isPrime = false;
      break;
    }
  }
  if (isPrime) document.write(userinput + " is a prime number");
}
