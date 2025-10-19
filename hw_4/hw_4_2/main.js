let value = +prompt("Enter your value");

let first = Math.floor(value / 100);
let second = Math.floor((value % 100) / 10);
let third = value % 10;

if (first === second && second === third ) {
    alert("All numbers are the same");
} else if (first === second || second === third || first === third) {
    alert("Only two numbers are the same");
} else {
    alert("Does not have repeating numbers");
}

//second way
let number = +prompt("Enter your number");

let set = new Set(number.toString().split(""));
if (set.size === 1) {
    alert("All numbers are the same");
} else if (set.size === 2) {
    alert("Only two numbers are the same");
} else {
    alert("Does not have repeating numbers");
}

