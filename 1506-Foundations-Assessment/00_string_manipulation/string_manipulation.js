
function vowelsCount(str){
    var num = 0
    var vowels="aeiou"
    str=str.toLowerCase()
    for(var i =0;i<str.length;i++){
        if (vowels.includes(str[i])){
            num++
        }
    }

    return num
}