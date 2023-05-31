function interviewQuestions(job){
switch(job){
    case 'teacher':return function (name){console.log("you are appointed teacher "+ name);}
    break;
    case 'designer':return function (name){console.log("you are appointed designer "+name);}
    break;
    default :return function (name){console.log("you are appointed clerk " +name);}

}
}

var g=interviewQuestions('clerk')('malavika');
 console.log(g);
// var h=g('malavika');
// console.log(h);