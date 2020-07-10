
// first clear and readable solution From YOSYA


function solve(arr){
    for (var i=0; i<arr.length; ++i) {
        console.log(arr.indexOf(arr[i]));
        if (arr.indexOf(-arr[i])==-1) {

            

            return arr[i];
            
        }
        
    }
      
  };



  // second solution From s21n

  const solve = array => array.find(value => !array.includes(-value));


  const arr = [1, -1, 2, -2, 3, -3, 5];
  solve(arr); // 5
