var a=0;
while(a<10){
    console.log(a);
    a++;
}

var arr=[13,98,87,67];
arr[0]=80;
arr[4]=99;
console.log(arr);
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("in REVERSE order");
for(var i=arr.length-1;i>=0;i--){
    console.log("index is :" +i, "values are:" +arr[i]);
}

console.log("EVEN values");
for(var i=arr.length-1;i>=0;i--){
    if(arr[i]%2==0)
    console.log("index is :" +i, "values are:" +arr[i]);
    
}

console.log("EVEN index");
for(var i=arr.length-1;i>=0;i--){
    if(i%2==0)
    console.log("index is :" +i, "values are:" +arr[i]);
    
}