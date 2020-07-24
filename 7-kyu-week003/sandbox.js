

// the first solution from the user 'donaldsebleung'

function modifiedSum(a, n) {
    return a.reduce((s, c) => s + Math.pow(c, n) - c, 0);

  }

 // the second solution from the user 'Niksonman'

 modifiedSum=(a, n)=>a.reduce((x,y)=>x+y**n -y, 0);

 // My Solution
/*
function modifiedSum(a, n) {
    // Write your code here
    let powerOfEl = 0;
    let sumOfEl = 0;
    for(let i = 0; i < a.length; i++){
      
      powerOfEl += Math.pow(a[i], n);

      sumOfEl += a[i];
    
    }
    let result = powerOfEl - sumOfEl;
    return result;
  }

  */

 const a = [1,2,3,4]; 
 const n = 4;
 //console.log(modifiedSum(a,n)); //344
 console.log(a.reduce);

