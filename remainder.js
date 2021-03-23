var a = parseInt(prompt("Enter the Dividend:"));
var b = parseInt(prompt("Enter the Divisor:"));
Operation();
console.log("the quotient is:"+ parseInt(c));
console.log("The remainder is:"+ d);

function Operation(){
    c = a/b;
    d = a%b;
}