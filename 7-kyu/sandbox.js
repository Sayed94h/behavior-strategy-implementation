

// the first solution from user5036852
function potatoes(p0, w0, p1) {
    return Math.floor(w0 * (100 - p0) / (100 - p1))
 }


 // the second solution from g964

 function potatoes(p0, w0, p1) {
    return ~~(w0 * (100.0 - p0) / (100.0 - p1))
}

const p0 = 99;
const w0 = 100;
const p1 = 97;

const w1 = potatoes(p0, w0, p1);
console.log(w1); // 50