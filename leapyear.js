// program to check leap year
function LeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');// it is leap year print statment
    } else {
        console.log(year + ' is not a leap year');//if is not a leap year print statment
    }
}

// take input
const year = prompt('Enter a year:');

LeapYear(year);