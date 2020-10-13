//Diff Two Arrays

function diffArray(arr1, arr2) {
    var newArr = [];

    /*Create a dictionary!
    Then just add all the elements in both arrays
    The poblate the newArr with count of 1;
    */
   var myMap1 = new Map();
   var myMap2 = new Map();

    for(var i=0;i<arr1.length;i++){
        if(!myMap1.has(arr1[i])){
            myMap1.set(arr1[i],true);
        }
    }

    for(var i=0;i<arr2.length;i++){
        if(!myMap2.has(arr2[i])){
            myMap2.set(arr2[i],true);
        }
    }
    
    
    for(var [key,value] of myMap1){
        if(!myMap2.has(key)){
            newArr.push(key);
        }
    }

    for(var [key,value] of myMap2){
        if(!myMap1.has(key)){
            newArr.push(key);
        }
    }

    return newArr;
  }
  
  console.log(  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

 console.log( diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
  