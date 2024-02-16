
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