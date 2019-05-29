function Human(name, gender, weight) {
    this.name = name;
    this.weight = weight;
    this.gender = gender;

    this.isMale = function() {
        if(this.gender == 'Male') {
            console.log ('I\'m male');
        }
        else {
            console.log ('I\'m female');
        }
    }

    this.setGender = function(gender) {
        this.gender = gender;  
    }

    this.checkApple = function() {
        return apple.isEmpty();
    }

    this.eat = function() {
        this.weight ++;
        // HOW connect Apple decrease?
        apple.decrease();
        
    }

    this.say = function(something) {
        this.something = something;
    }

    this.getName = function() {
        return this.name;
    }

    this.setName = function() {
        this.name = name;
    }
    this.getWeight = function () {
        return this.weight;
    }




    

}