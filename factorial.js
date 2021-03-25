var a = parseInt(prompt("Enter the you want factorial of:"));

console.time();

console.log(callback(a, factorial));

function callback(a, factorial){
    return factorial(a);
}

console.timeEnd();

function factorial(a){
    if (a>=1)
    return a*factorial(a-1);
    else if(a==0)
    return 1;
    else
    return alert("asas");
}


