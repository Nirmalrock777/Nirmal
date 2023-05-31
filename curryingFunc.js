function add(x, y, z) {
    return x + y + z;
}
var z = add(4, 5, 7);
console.log(z);



function add1(x) {
    return function (y) {
        return function (z) {
            return x * y * z;
        };
    };
};


var y = add1(5)(5)(5);
console.log(y);