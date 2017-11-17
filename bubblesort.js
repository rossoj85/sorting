

function bubbleSort(arr) {
    
    var len = arr.length; 

    if (len<1) return arr

    for(var i=0;i<len-1;i++){
        for(var j=0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}

function bubbleSortWhile(arr){
    const len = arr.length
    let passes
    
    do{
      passes=false
      for(var i=0;i<len-1;i++){
        if(arr[i]>arr[i+1]){
          let temp = arr[i+1]
          arr[i+1]= arr[i]
          arr[i]=temp
          passes=true
        }
      }
    }
    while (passes)
    return arr
  }


  function bubbleSortRecursive(arr,pointer=arr.length-1){
    let len = arr.length

    if(pointer<1) return arr //BASE CASE
    
    for(var i=0;i<len-1;i++){
      if(arr[i]>arr[i+1]){
        let temp = arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        
      }
    }
    //  ALWAYS REMEMBER TO RETURN RECURISVE CASES
    return bubbleSortRecursive(arr,pointer-1)
  }

  // A simple excercise 
  // sort the list of persons by age

  var persons = [ 
    { 
    "name": "john", 
    "age": "23" 
    }, 
    { 
    "name": "harry", 
    "age": "21" 
    }, 
    { 
    "name": "jack", 
    "age": "25" 
    } 
    ];
  
    function bubbleSortPersons(persons, pointer=persons.length-1){
        let len=persons.length
        if(pointer===0) return persons
        
        for(var i=0; i<len-1;i++){
          console.log(persons[i].age)
          if(persons[i].age>persons[i+1].age){
            
            let temp= persons[i]
            persons[i]=persons[i+1]
            persons[i+1]=temp
          }
        }
        return bubbleSortPersons(persons,pointer-1)
      }