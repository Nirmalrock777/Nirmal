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

var inputArray=[2,7,9];
var d=multiplication(inputArray);
console.log(d);

function evenCount(arr){
    count=0;
    for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        count++
    }}    
    return count;
}
var input=[20,30,47,45];
var output=evenCount(input);
console.log(output);