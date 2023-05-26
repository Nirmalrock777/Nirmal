var z = [5, 12, 15, 20, 25, 27];
function div5(arr) {
    var count=0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0)
            count++;
    }
    return count;
}

var y = div5(z);
console.log(y);