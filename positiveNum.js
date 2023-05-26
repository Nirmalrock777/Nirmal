var a=[22,45,67,98,-98,-56,8,-76];
// Count of postive values in an array
function pos(arr){
    var count=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>=0){
            count++
        }
    }
    return count;
}

var fn=pos(a);
console.log(fn);