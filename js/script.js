//Start Assignment 01 
document.write(`<h1>Start Assignment 01</h1>`);
/* JavaScript
Author: Magdalena Wollin
Date: 09/25/2023
Assignment 01
*/
// Variables
let myName = 'this is my name'
let myClass = "here"
//Exercise 1
//1. Convert the following highlighted identifiers to Camel Case notation:
//   let some_month
//   function the Month()
//   let current-month
//   let summer_month
//   let MyLibrary-function
let someMonth;
function theMonth() {}
let currentMonth;
let summerMonth;
let myLibraryFunction;

//2. Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
let nLiteral = 6;
let sLiteral = 'Hello';
let bLiteral = true;
let nullLiteral = '';
document.write(`The nLiteral is ${nLiteral}<br/>`);
document.write(`The sLiteral is ${sLiteral}<br/>`);
document.write(`The bLiteral is ${bLiteral}<br/>`);
document.write(`The nullLiteral is ${nullLiteral}<br/>`);

//3. Give me two examples of complex / variable expressions.

//4. Declare (but do not assign) 9 variables for the following identifiers: 
//   First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. 
//   Use Camel Casing and Hungarian Notation when naming your identifiers.
let strFirstName;
let strLastName;
let strAddress;
let strCity;
let strState;
let strZipCode;
let intYourAge;
let strReferralSource;
let bMayWeContactYou;

//5. Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
strFirstName = 'Molly';
document.write(`The strFirstName is ${strFirstName}<br/>`);
intYourAge = 60;
document.write(`The intYourAge is ${intYourAge.toString(10)}<br/>`);
bMayWeContactYou = 1;
document.write(`May we contact you? ` + Boolean(bMayWeContactYou) + `<br/>`);


//6. Create a variable.
//   Add a number and a string and display the coerced result in the browser’s console window.
let intvar = 5;
let strvar = "the number is     ";
document.write(strvar + intvar + `<br/>`);
//console.log("coerced result");
//console.log(strvar + intvar);

//7. Create two variables.
//   For the first variable, add a Boolean and a string and display the coerced result.
//   For the second variable, add a number and a Boolean and display the coerced result.
let bval = 1;
let sval = "boolean and a string ";
let ival = 5;
document.write(`${sval}` + Boolean(bMayWeContactYou) + `<br/>`);
document.write(`${ival}` + bMayWeContactYou + `<br/>`);

//8. Is the following string literal valid?  NO 
//   If not, how would you fix it?  Need to add escape char \ from I'm to I\'m
//   let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
//   console.log(someString)
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
document.write(someString);
console.log(someString);

//9. Create a variable that produces a null value in the console window.
//   Then, create a variable that produces an undefined value in the console window.

/*
let x='';
let x = typeof myVar
/*

//10. Use the unary typeof operator on various literals to return the following types within 
//    the console window: string, number, Boolean, object, and undefined.

/*  Console output
"'Molly' is " + typeof "Molly"
"'Molly' is string"
"'Molly' is " + typeof "Molly"
"'Molly' is string"
"3.14 is " + typeof 3.14
'3.14 is number'
"true is " + typeof true
'true is boolean'
"{name:'Molly', age:50} is " + typeof {name:'Molly', age:50}
"{name:'Molly', age:50} is object"
"myVar is " + typeof myVar
'myVar is undefined'
*/

//11. Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

//    Hello Zak Ruvalcaba, welcome to the JavaScript class!

//    Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. 
//    One after the text “Hello” and a second one after your name and before the comma.

//<!--<body onload="javascript:alert(['Hello', ' ', 'Magdalena Wollin'].join('') + ', welcome to the JavaScript class!')" > -->


//12. Declare a variable called name and set it equal to your name.
//    Substitute your name in the previous alert string with the variable instead.
//13. Declare a variable called course and set it equal to “JavaScript”.
//    Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
//14. Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
//
//    Hello Zak Ruvalcaba.
//    Welcome to the JavaScript class!
//
//  <body onload="javascript:alert('Hello Magdalena Wollin\n'+'Welcome to the JavaScript class!')" >

//15.Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
//16.Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
//17.Declare a variable called x and assign it a value of 10.
//   Declare a variable called y and assign it a value of 20.
//   Display the sum of those two numbers in the console window.
//18. Declare a variable called x and assign it a value of 20.
//   Add and assign 20 to that variable and display the result in the console window.
//   The result should be 40.
//19. Declare a variable called x and assign it a value of 20.
//   Multiply and assign 5 to that variable and display the result in the console window.
//   The result should be 100.
//20. Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//    Divide and assign 1 to that variable and display the result in the console window.
//    The result should be 2. If you got 6.66 try again.
//21. Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
//22. Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same 
//    operators used in the previous application.
