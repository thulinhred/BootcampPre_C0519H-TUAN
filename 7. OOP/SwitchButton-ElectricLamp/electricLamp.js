function ElectricLamp(status) {

    this.turnOff = function() {
        this.status = false;
    }

    this.turnOn = function() {
        this.status = true;
    }
}