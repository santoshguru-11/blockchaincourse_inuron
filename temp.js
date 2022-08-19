// program to convert celsius to fahrenheit
// ask the celsius value to the user 
function CtoF(celsius){

// calculate fahrenheit
const fah = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fah} degree fahrenheit.`);
}
function Ftoc(fahrenheit){
    const cel = (fahrenheit - 32) / 1.8
    console.log(`${fahrenheit} degree celsius is equal to ${cel} degree fahrenheit.`);
}
const asking = prompt("if you want Celsius to Fahrenheit press 1 and if you want to convert Fahrenheit to celsius press 2");
if(asking == 1){
    const celsius = prompt("Enter a celsius value: ");
    CtoF(celsius);
}
else if(asking == 2){
    const fahrenheit = prompt("Enter a fahrenheit value: ");
    Ftoc(fahrenheit);
}
else{
    alert("entered wrong input");
}

