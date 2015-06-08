function createArgumentMap(func){
    var result={}
    for(var i=0;i<arguments.length;i++){
        result['a'+i]=arguments[i]
    }
    return result
}


function keyAdder(){
    var sum = 0
    var dict=this;
    for(var key in dict){
        if(!isNaN(dict[key]) && dict.hasOwnProperty(key)){
            sum+=dict[key]
        }
    }
    return sum
}
