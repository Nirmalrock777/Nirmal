function arrayCount(arr) {
    var countOf0 = 0;
    var countOf1 = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            countOf0++;

        }
        if (arr[i] == 1) {
            countOf1++;

        }
    }
    return [countOf0,countOf1];
    
}

var q = [0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0];
var t = arrayCount(q);
console.log(t);

