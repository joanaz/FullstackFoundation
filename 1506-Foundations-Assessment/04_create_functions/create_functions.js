function createFunctions(num){
    var result=[];
    for(var i=0;i<num;i++){
        (function(num){
            result.push(function(){
                return num
            });   
        }(i));
    }
    return result;
}

