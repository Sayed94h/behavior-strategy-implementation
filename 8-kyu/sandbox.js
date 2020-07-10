
// the first solution From BrianBorin

function dutyFree(normPrice, discount, hol){
    var saving = normPrice * discount / 100;
    return Math.floor(hol / saving);
  }


// the second solution From 0lexa

const dutyFree = (normPrice, discount, hol) =>
  hol / (normPrice * discount / 100) ^ 0;

// use case
  const normPrice = 28.99;
  const discount = 30;
  const hol = 12000;
  const result = dutyFree(normPrice, discount, hol);
  console.log("You should buy "+ result+ " bottles of whiskey to cover your holiday costs");
