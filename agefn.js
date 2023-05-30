var z = [1990, 1987, 1955, 1938, 1944];

function calcAge(year) {
    return 2023 - year;
}

function getResult(arr, func) {
    var emparr=[];
    for (i = 0; i < arr.length; i++) {
        var res = func(arr[i]);
        emparr.push(res);
    }
    return emparr;
}
var temp=getResult(z,calcAge);
console.log(temp);

function adultAge(arr){
    return arr>40;
}
var temp1=getResult(temp,adultAge);
console.log(temp1);
