var a=[-16,-22,22,52,-90];
// replacing -ve values with 0

function neg(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}

var z=neg(a);
console.log(z);