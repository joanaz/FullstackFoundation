function interleave(){
    var str=''
    var tail=''
    var length=arguments[0].length
    var diffLength=arguments[0].length-arguments[1].length
    
    if(arguments.length==2&&diffLength!=0){
        longerStr=diffLength>0?0:1
        shorterStr=diffLength>0?1:0
        length=arguments[shorterStr].length 
        tail=arguments[longerStr].slice(arguments[shorterStr].length)
    }

    for(var j=0;j<length;j++){
        for(var i=0;i<arguments.length;i++){
            str+=arguments[i][j]
        }
    }
    str+=tail
    return str
}