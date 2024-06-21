const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//let newStr = str.slice(3) + str.slice(0, 3);
//console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.

//console.log(`'we change ${str} into ${newStr} using string methods.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numLetters = Number(input.question("How many letters will be relocated?"));

let numStr = str.slice(numLetters) + str.slice(0, numLetters);

let defaultStr = str.slice(3) + str.slice(0, 3);

//console.log(numStr);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numLetters > str.length) {
    console.log("input exceeds length of the word.");

    console.log(`'We change ${str} into ${defaultStr} using string methods'`);
} else {
    console.log(`'We change ${str} into ${numStr} using string methods'`);
}