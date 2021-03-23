calculator();
function calculator() {
    var a = parseInt(prompt("Enter the Operation you want: 1. Add 2. Sub 3. Div 4. Mul 5. Mod"));
    var x = parseInt(prompt("Enter first Value", "0"));
    var y = parseInt(prompt("Enter second Value", "0"));
    switch (a) {
        case 1: add();
            console.log(z);
            break;

        case 2: substract();
            console.log(z);
            break;

        case 3: divide();
            console.log(z);
            break;

        case 4: multiply();
            console.log(z);
            break;

        case 5: modulus();
            console.log(z);
            break;

        default: alert("Choose correct option");
        calculator();
    }
}
function add() {
    z = x + y;
}
function substract() {
    z = x - y;
}
function divide() {
    z = x / y;
}
function multiply() {
    z = x * y;
}
function modulus() {
    z = x % y;
}
