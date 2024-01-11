console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0xa"));

let x = NaN;

console.log(x == NaN);

console.log(isNaN(x));

console.log(isNaN("sanket")); // isNaN converts the incoming input to a number

console.log(Number.isNaN("sanket"));
console.log(Number.isNaN(x));

if(typeof(x) == 'number' && x !== x ) {
    console.log(true);
}

console.log(x !== x); // ! == is there any problem with this expression to check nan value


console.log(1 < 2 < 3);// -> (1 < 2) = true -> true < 3 -> 1 < 3 -> true
console.log(3 > 2 > 1);// -> (3 > 2) -> true -> true > 1 -> 1 > 1 -> false