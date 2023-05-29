var add = (x, y) => x + y;
var sub = (x, y) => x - y;
var mul = (x, y) => x * y;

function calculate(fn1, fn2, x, y) {
    var r1 = fn1(x, y);
    var r2 = fn2(x, y);
    return [r1, r2];
}
// Passing the function as an argument.
var y = calculate(add, mul, 9, 9);
console.log(y);


// Returning a anonymous fnction

function mm (a) {
    console.log("HI  "+a);
    return function(x, y) {
        let multi = x * y;
        console.log(multi);
    }
}


let w=mm(7);
console.log(w);

// var b=w(12,9);
// console.log(b);