

// the first solution from the user 'bennour'

function solve(arr){
    var a=[];
    var ar=arr.reverse();
    for (var i=0; i<ar.length; ++i)
      if (a.indexOf(ar[i])==-1)
        a.push(ar[i]);
    return a.reverse();
  }


 // the second solution from user 'JohanWiltink'

 const solve = a => Array.from(new Set(a.reverse())).reverse();

 // one test

 /*
const arr = [7,11,7,11,13,11,7,5,3,1,7];
const callFunc = solve(arr);
console.log(callFunc); //[ 13, 11, 5, 3, 1, 7 ]

*/
