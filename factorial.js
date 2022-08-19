// program to find the factorial of a number

// take input from the user
const num= parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (num < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (num === 0) {
    console.log(`The factorial of ${num} is 1.`);
}

// if number is positive
else {
    let factorialStart = 1;
    for (i = 1; i <= num; i++) {
        factorialStart *= i;// loop of adding nummber to remaining factorials
    }
    console.log(`The factorial of ${num} is ${factorialStart}.`);
}