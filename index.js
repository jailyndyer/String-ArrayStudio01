const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = (str.slice (3, 9) + str.slice(0, 3));

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} is not spelled ${newStr}.\n`);


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let relocateLetters = input.question("Enter the number of letters to be relocated: ");
let relocateStr = str.slice(relocateLetters, str.length) + str.slice(0, relocateLetters);

console.log(`\n${str} is not spelled ${relocateStr}.\n`);

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
relocateLetters = input.question("Enter the number of letters to be relocated: ");
if (relocateLetters <= 10)
{
  let relocateStr = str.slice(relocateLetters, str.length) + str.slice(0, relocateLetters);

  console.log(`\n${str} is not spelled ${relocateStr}.`);
}
else
{
  let relocateStr = str.slice(3, 9) + str.slice(0, 3);

  console.log(`\n${str} is not spelled ${relocateStr}.`);
  console.log(`Warning: ${relocateLetters} is longer than the string.`);
}