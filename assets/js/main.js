
// Exercise 1
// Declare a variable called number and assign it the value 100. 
const number = 100; //number
// Print the value of the variable to the console.
console.log(number);

// Exercise 2
// Declare a constant PI and assign it the value 3.14. 
const PI = 3.14; //number
// Print the value of the constant to the console.
console.log(PI);

// Exercise 2/B
// Try assign to the constant PI the value of 3.1416. Can you tell what's happening?
// The value of a constant cannot be changed (error: Assignment to constant variable.)

// Exercise 2/C
// Declare a variable called radius and assign it the value of 8. 
const radius = 8; //number
// Multiply radius x 2 and x PI then assign the value to a variable named circle.
const circle = radius * 2 * PI; //number
// Print the value of the variable circle to the console.
console.log(circle);

// Exercise 3
// Declare a variable name (name is deprecated so I changed it to userName) and assign it the value "Carlo"
let userName = 'Carlo'; //string
// Change the value of the variable to "Marco".
userName = 'Marco';
// Print the new value to the console.
console.log(userName);

// Possible solution to "name is deprecated".
(() => {
    let name = "Carlo";
    name = 'Marco';
    console.log(name);
})();

// Exercise 4
// Declare a variable called temperature and assign it the value 22.5
let temperature = 22.5;
// Add 5 to it.
temperature += 5;
// Print the new value to the console.
console.log(temperature);

// Exercise 5: Numbers
// What's the difference between the number 3.14 and 100? Are they different? Why? What's their data type?
console.log(typeof 3.14, typeof 100); // they are both numbers
/* 
3.24 is a floating-point number (a number with a fractional part)
100 is an integer (a whole number with no fractional part)
*/

// Exercise 6: Console
// What's the difference between console.log() and console.info()? Why? Are there other ways to use the console?
/* 
console.log(): Used to log general information or messages to the console. 
It is commonly used for debugging purposes or for general logging of information. 

console.info(): Also used to log information to the console, but it is specifically intended for informational messages. 
It's often used when you want to provide additional information about the state of the application or certain processes. 

console.error(): Used to log error messages. These messages are typically displayed with an error icon in the console.
console.warn(): Used to log warning messages. These messages are typically displayed with a warning icon in the console.
console.debug(): Used to log debug messages. These messages are often hidden by default in some browsers' developer tools, and you may need to enable them explicitly.
console.assert(): Used to log an error message if the specified assertion is false. It's helpful for debugging and testing purposes.
console.trace(): Used to output a stack trace to the console. It shows the function call stack at the point where the method was called.

These methods provide developers with various options for logging different types of messages and debugging information. 
The choice of which method to use depends on the nature of the message you want to log and the level of severity associated with it.
*/