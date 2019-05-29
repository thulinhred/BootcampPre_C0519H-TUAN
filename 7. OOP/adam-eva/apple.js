function Apple(weight) {

    this.weight = weight;

    this.decrease = function () {
        this.weight --;
    }

    this.isEmpty = function () {
        return this.weight === 0;
    }

    this.getWeight = function () {
        return this.weight;
    }

    this.showWeight = function() {
        console.log("Apple's weight is " + this.weight);
    }
}