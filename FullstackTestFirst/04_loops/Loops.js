function repeat(str, num){
    var result ="";
    for(var i = 0; i<num; i++){
        result+=str;
    }
    return result;
}

function sum(array){
    var sum=0;
    for (var i=0; i<array.length; i++){
        sum+=array[i];
    }
    return sum;
}

function gridGenerator(num){
    var result="";
    for(var i=0;i<num;i++){
        for(var j=0;j<num;j++){
            result+=((i+j)%2==0) ? "#" : " ";
        }
        result+="\n";
    }
    return result;
}

function largestTriplet(num){
    var result=[];
    for(var i = num;i>0;i--){
        for(var j = num-1;j>0;j--){
            for(var k=num-1;k>0;k--){
                if(k*k+j*j==i*i){
                    result.push(k);
                    result.push(j);
                    result.push(i);
                    return result;
                }
            }
        }
    }

    return result;
}

function join(array,sep){
    sep = sep || "";
    var result="";
    
    result=array.join(sep);
 
    return result;
}

function paramify(obj){
    var result="";
    var array=[];
    for (var key in obj){
        if(obj.hasOwnProperty(key)){
            array.push(key+"="+obj[key]);
        }
    }
    array.sort();
    result=array.join("&");
    return result;
}