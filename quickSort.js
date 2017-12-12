function quickSort(origArray){
    
    if(origArray.length<=1){
      return origArray;
    }else{
      
      var left =[];
      var right=[];
      var newArray=[];
      var pivot =origArray.pop()
      var length =origArray.length;
      
      for(var i =0; i<length; i++){
        if(origArray[i]<=pivot){
          left.push(origArray[i]);
        }else{
          right.push(origArray[i])
        }
        console.log("PIVOT", pivot)
        console.log(left, right , "original array- ", origArray)
      }
      
      console.log(pivot)
              return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
  }