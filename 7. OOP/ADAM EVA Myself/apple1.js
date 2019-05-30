function Apple(weight) {
    this.weight = weight;
    this.decrease = function () {
        this.weight--;
    }
    this.isEmpty = function () {
        if (this.weight == 0) {
            console.log("Nothing left. Go away!")
        }
        else {
            console.log("Hey eat me!")
        }
    }
    this.getWeight = function () {
        return this.weight
    }
}