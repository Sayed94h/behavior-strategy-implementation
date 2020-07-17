

// the first solution from user 'Dentzil'
/*
 function fakeBin(x) {
    
    let newArr = x.split('');
    let mapArr = newArr.map(n => n < 5 ? 0 : 1);
    let final = mapArr.join('');
    return final;
    
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
    }
*/


 // the second solution from user 'antoine'

 function fakeBin(x) {
    
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  
  }


  console.log('result: ', fakeBin('56912')); //11100

  //console.log(fakeBin('5,6,9,1,2')); //111111010

  //console.log(fakeBin('123069')); //000011
