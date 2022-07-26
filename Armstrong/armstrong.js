// CREATE AN ARMSTRONG CHECK

// First get the number from the user
var userInput = prompt("Enter a number : ").toString();

// get the character total number from the userinput
var chaNum = userInput.length;

// create a userinput interger value
var userInputInt = parseInt(userInput);

// create a temporary userinput interger value
var temp = userInputInt;

// the total variable holds the result of the solution
var total = 0;

// loop throught the each number and multiply by their total
for (let i = 0; i < parseInt(chaNum); i++) {
  var num = temp % 10;
  total += num ** parseInt(chaNum);
  temp = parseInt(temp / 10);
}

// compare total result with the userinputInt
if (total == userInputInt) {
  document.write("This number is an armstrong number");
} else {
  document.write("This number is not an armstrong number");
}
