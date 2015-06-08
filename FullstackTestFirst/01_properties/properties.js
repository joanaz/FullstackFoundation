function setPropertiesOnObjLiteral(object){
    //debugger;
    object.x = 7;
    object.y = 8; 
    object.onePlus = function(num){
        return 1+num;
    }
}

function setPropertiesOnArrayObj(arrayObject){
    arrayObject.hello = function(){
        return "Hello!";
    }
    arrayObject.full = "stack";
    arrayObject[0]=5;
    arrayObject.twoTimes=function(num){
        return num*2;
    }
}

function setPropertiesOnFunctionObj(functionObject){

    functionObject.year =2015;
    functionObject.divideByTwo=function(num){
        return num/2;
    }
    functionObject.prototype.helloWorld = function(){
        return "Hello World";
    }
}