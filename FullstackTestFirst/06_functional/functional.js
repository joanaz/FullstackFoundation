// 06_Functional 
function doubler(num){
    return num*2;
}

function map(array, funct){
    results=[];
    for (var i=0;i<array.length;i++){
        results[i]=funct(array[i]);
    }
    return results;
}

function filter(array, funct){
    results=[];
    var j=0;
    for (var i=0;i<array.length;i++){
        if(funct(array[i])){
            results[j]=array[i];
            j++;
        }
    }      
    return results;
}

function contains(array, num){
    for(var key in array){
        if(num==array[key]){
            return true;
        } 
    }
    return false;
}

function countWords(str){
    return str.split(' ').length
}

function reduce(arr, num, funct){
    result=arr[num]
    
    for (var i=num+1;i<arr.length;i++){
        result=funct(result,arr[i])
    }
    return result
}

function countWordsInReduce(str1, str2){
    return countWords(str1)+countWords(str2)
}

function sum(arr){
    return reduce(arr,0,function add(a, b) {
        return a + b;
  })
}

function every(arr, funct){
    for(var i=0;i<arr.length;i++){
        if(!funct(arr[i])){
            return false
        }
    }
    return true
}

function any(arr, funct){
    for(var i=0;i<arr.length;i++){
        if(funct(arr[i])){
            return true
        }
    }
    return false
}

