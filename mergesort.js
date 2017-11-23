function split(arr){
    if(arr.length<2) return arr
      const midpoint = Math.ceil(arr.length/2)
      console.log(arr.length/2)
      console.log(midpoint)
      const left = arr.slice(0, midpoint)
      const right = arr.slice(midpoint, arr.length)
      return [left,right]
  }
   function merge(left,right){
     let merged = []
     let li=0
     let ri=0
     
     while(li<left.length && ri<right.length){
       if(left[li]>right[ri]){
         merged.push(right[ri++])
       }else{
       merged.push(left[li++])
       }
     }
     return merged.concat(left.slice(li)).concat(right.slice(ri))
   }
  
  function mergeSort(arr){
      if(arr.length<2){return arr}
      //this is the slice function
      let mid = Math.ceil(arr.length/2);
      let left = arr.slice(0,mid);
      let right = arr.slice(mid)
  
      return merge(mergeSort(left), mergeSort(right))
  }