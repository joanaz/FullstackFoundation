function createCalculator(){
    this.result = 0;

    this.value = function(){
        return this.result;
    }

    this.add = function(num){
        this.result+=num;
    }

    this.subtract=function(num){
        this.result-=num;
    }

    return this;
}