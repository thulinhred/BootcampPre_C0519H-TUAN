function SwitchButton() {

    this.connectToLamp = function(electricLamp) {
        this.electricLamp = electricLamp;
    }

    this.switchOff = function() {
        alert('The lamp is off');
    }

    this.switchOn = function() {
        alert('The lamp is on');
    }
    
}