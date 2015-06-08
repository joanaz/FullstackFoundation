function RPNCalculator(){
    this.nums = [];
    this.result = 0;
}

RPNCalculator.prototype.value = function(){
    return this.result;
}

RPNCalculator.prototype.push = function(num){
    this.nums.push(num);
}

RPNCalculator.prototype.plus = function(){
    if (this.nums.length < 2){
        throw "rpnCalculator is empty";
    }
    else{
        this.result = this.nums.pop() + this.nums.pop();
        this.nums.push(this.result);
    }   
}

RPNCalculator.prototype.minus = function(){
    if (this.nums.length < 2){
        throw "rpnCalculator is empty";
    }
    else{
        this.result = this.nums.pop()
        this.result = this.nums.pop()-this.result;
        this.nums.push(this.result);
    } 
}

RPNCalculator.prototype.divide = function(){
    if (this.nums.length < 2){
        throw "rpnCalculator is empty";
    }
    else{
        this.result = this.nums.pop()
        this.result = this.nums.pop()/this.result;
        this.nums.push(this.result);
    }
}

RPNCalculator.prototype.times = function(){
    if (this.nums.length < 2){
        throw "rpnCalculator is empty";
    }
    else{
        this.result = this.nums.pop()*this.nums.pop();
        this.nums.push(this.result);
    }
}
