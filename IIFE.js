(function () {

    var z = [1990, 1997, 2000];
    // // var age=(x)=>2023-x;

    // function calculateYears(x) {   
    //     return 2023 - x;
    // }
    function ageCalculation(arr, func) {
        var newarr = [];
        for (i = 0; i < arr.length; i++) {
            var t = func(arr[i]);
            newarr.push(t);
        }
        return newarr;
    }
    var zz = ageCalculation(z, (x) => 2023 - x);
    console.log(zz);

})();






