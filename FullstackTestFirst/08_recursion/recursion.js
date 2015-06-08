function factorialIterative(num){
    result=num
    for(var i=num-1;i>1;i--){
        result=result*i
    }
    return result
}

function factorial(num){
    if(num==0)
        return 1
    else
        return num*factorial(num-1)
}

function fib(num){
    if(num<2)
        return 1
    else{
        return fib(num-1)+fib(num-2)
    }
}

function type(obj){
    return Object.prototype.toString.call(obj).split(' ')[1].split(']')[0]
}

function stringify(obj){
    var result=[]

    if(type(obj)=="String"){
        return "\""+obj+"\""
    }
    else if(type(obj)=='Array'){
        for (var i=0;i<obj.length;i++){
            obj[i]=stringify(obj[i])
        }
        return "["+obj.join(',')+"]"
    } 
    else if(type(obj)=='Object'){
        var j=0
        for (var key in obj){
            result[j]=stringify(key)+": "+stringify(obj[key])
            j++
        }
        return "{"+result.join(',')+"}"
    }
    else{
        return String(obj)
    }    
}