// Functions.js
function concat_string(){
    result="";
    for (var i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    
    return result;
}

function yourFunctionRunner(){
    result="";
    for (var i=0;i<arguments.length;i++){
        result+=arguments[i]();
    }
    
    return result;
}

var globalnum=0;
function makeAdder(num){
    globalnum=num; 
    return adderOf2function;
}

function adderOf2function(num){
    return globalnum+num;
}

function once(funct){
    var run = false;
    function increment(){
        if(!run){
            funct();
            run = true;
        }
    }
    return increment;
}

function createObjectWithTwoClosures(){
    var result=0;
    var sharedObj={};
    sharedObj.oneIncrementer=function(){
        return result+=1;
    }
    sharedObj.tensIncrementer=function(){
        return result+=10;
    }
    sharedObj.getValue=function(){
        return result;
    }
    return sharedObj;
}