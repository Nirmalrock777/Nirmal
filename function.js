function f1(x) {
    var r = (x * x) + x + 1;
    return r;
}
var z = f1(2);
console.log(z);
var y = f1(9);
console.log(y);


function isEven(x) {
    if (x % 2 == 0) return true;
    else return false;
}

var n=isEven(47);
console.log(n);


function multiplication(arr){
    for(i=0;i<arr.length;i++)
    arr[i]=arr[i]*2;
    return arr;
}

var ragava=[2,7,3];
var d=multiplication(ragava);
console.log(d);

function evenCount(arr){
    var count=0;
    for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        count++;
    }}    
    return count;
}
var teja=[20,7,18];
var output=evenCount(teja);
console.log(output);

var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
function shuffle(arr) {
    var currentIndex = 0;
    while (currentIndex <9) {
        var randomIndex = Math.floor(Math.random() * arr.length);
        currentIndex++;
        let tempStorage = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = tempStorage;
    }
    return arr;
}
var shuf = shuffle(arr);
console.log(shuf);