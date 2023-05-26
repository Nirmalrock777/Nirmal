
function shuffle(k) {
    for (var i = 0; i <k.length; i++) {
        var j = Math.floor(Math.random() * k.length);
        let tempStorage = k[i];
        k[i] = k[j];
        k[j] = tempStorage;
    }
    return k;
}
var array1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var shuf = shuffle(array1);
console.log(shuf);