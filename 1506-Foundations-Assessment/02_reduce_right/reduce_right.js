function reduceRight(arr,nan,func){
    var str=arr[arr.length-1]
    for(var i = arr.length-2;i>=0;i--){
        str=func(str,arr[i])
    }
    return str
}

function reduceRightRecursive(arr,str,func){  
    if(arr.length>0){
        return reduceRightRecursive(arr,func(str,arr.pop()),func);   
    }
    else{
        return str
    }
}