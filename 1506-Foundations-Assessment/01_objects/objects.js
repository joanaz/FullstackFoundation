function Vehicle(license,color){
    this.licensePlate=license
    this.color=color
    
}

Vehicle.prototype.beep = function(){
    return "BEEP, BEEP"
}

Vehicle.prototype.changeColor=function(newColor){
    this.color=newColor
}

function Truck(license,color,transmission){
    Vehicle.call(this,license,color)
    this.transmission=transmission
}

Truck.prototype=Object.create(Vehicle.prototype)
Truck.prototype.constructor=Truck
Truck.prototype.toString=function(){}