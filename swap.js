
function swap(arr) {
    for (var i = 0; i <= arr.length - 1; i+=2) {
        var temp=arr[i+1];
        arr[i+1]=arr[i];
        arr[i]=temp;
    }
    return arr;
}
var a = [57, 96, 87, 67, 55, 7, 9, 8, 6, 5, 22, 77];
var b = swap(a);
console.log(b);