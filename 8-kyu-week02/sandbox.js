
// the first solution From the user 'Balkoth'

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// the second solution From the user 'dako'

const isDivisible = (n, x, y) => n%x==0 && n%y==0;


// the solution that I did not understood

/*
function isDivisible(n, x, y) {
  return !(n%x||n%y)
}

*/

const n = "r";
const x = 'r';
const y = 7;

const result = isDivisible(n, x, y);
console.log('result: ', result); // result: false