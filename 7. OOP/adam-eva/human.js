function Human(name, gender, weight) {

    this.name = name;
    this.weight = weight;
    this.gender = gender;

    this.isMale = function () {
        return this.gender;
    }
    this.setGender = function (gender) {
        this.gender = gender;
    }
    
    this.checkApple = function (apple) {
        return !apple.isEmpty();
    }
    
    this.eat = function (apple) {
        this.weight ++;
        apple.decrease();
    }

    this.say = function () {
        console.log("Hey I can talk!");
    }

    this.getName = function () {
        return this.name;
    }

    this.setName = function (name) {
        this.name = name;
    }

    this.getWeight = function () {
        return this.weight;
    }

    this.setWeight = function (weight) {
        this.weight = weight;
    }

    this.showWeight = function() {
        console.log(this.name + "'s weight is " + this.weight);
    }
}