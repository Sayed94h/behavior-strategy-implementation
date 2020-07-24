

// the first solution from the user 'CreepermanJS'
/*
function roots(a,b,c){
    let D = b * b - 4 * a * c;
    if (D < 0) {
      return null
    }
    return +(-b / a).toFixed(2)
  }
*/
 // the second solution from the user 'Ilya-Baklanov'

 function roots(a,b,c){
    let x;
    let z = a * x **2 + b * x + c;
    let d = b ** 2 - 4*a*c;
    
    if (d < 0) {
      return x = null;
    } else {
      if (d == 0) {
        let x1 = -b / (2 * a);
        x = x1 + x1;
        return Math.round(x*100) / 100; 
      } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a); 
        x = x1 + x2;
        return Math.round(x*100) / 100;
      }
    }
  };

console.log(roots(107,417,17));//-3.9
