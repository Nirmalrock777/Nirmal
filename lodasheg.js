var _ = require('lodash');


var result = _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 console.log(result);
 var result1=_.chunk(['a', 'b', 'c', 'd'], 1);
// => [['a', 'b', 'c'], ['d']]

console.log(result1);

var result2=_.compact([0, 1, false, undefined,2, '', 3,4]);
console.log(result2);

var array1=[5,6,9,0,1,34,56];
var array2=[54,[[90]],99,[55]];
var result3=_.concat(array1,array2);
console.log(result3);

var result4=_.difference([1,100],[100,2]);
// comparing only the 1st array with other arrays.
console.log(result4);


var result5=_.differenceBy([1.1,100.5],[100.6,2.3],Math.floor);
// comparing only the 1st array with other arrays.
console.log(result5);


var arrobj=[{'x':1,'y':2,'z':6},{'x':1,'y':2,'z':9}];
var arrobj1=_.differenceWith(arrobj,[{'x':1,'y':2,'z':6}],_.isEqual);
console.log(arrobj1);


console.log(_.drop([1,2,3,4,5],4));
console.log(_.dropRight([99,2,3,4,5],4));



