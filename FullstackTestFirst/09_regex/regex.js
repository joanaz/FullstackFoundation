function findACount(str){
    str = str.toLowerCase()
    var count=0;
    for (var i in str){
        if (str[i]=='a'){
            count++;
        }
    }
    return count;
}

function areaCodeFinder(str){
    areaCode=0
    if(str[0]=='('){
        areaCode=parseInt(str.substring(1,4));
    }
    else {
        areaCode=parseInt(str.substring(0,3));
    }
    
    return areaCode;
}

function adjustUrlParameter(url,param){
    var indexOfParam=url.indexOf(param.substring(0,param.indexOf('=')+1))
    if(indexOfParam!=-1){
        url=url.substring(0,indexOfParam)+param
    }
    else if(url.includes('?')){
        url+="&"+param
    }
    else{
        url+="?"+param
    
    }
    return url
}

function  stringPlusPlus(str){
    var length=str.length;
    var index=length-1;
    if(isNaN(parseInt(str[index]))){
        str+='1';
    }
    else{
        while(!isNaN(parseInt(str[index]))){
            index--;
        }
        var newNum=(parseInt(str.substring(index+1))+1).toString()
        str=str.substring(0,index+1)
        for(var i=0; i<(length-index-1-newNum.length);i++){
            str+='0'
        }
        str+=newNum;
    }
    return str;
}