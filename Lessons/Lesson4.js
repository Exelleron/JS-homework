class Animal {

    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    getTextHeight(){
        return `${this.height} sm`
    }
}

let dog = new Animal(100, 35);
console.log(dog.getTextHeight());

let cat = new Animal(30, 5)
console.log(cat.getTextHeight());

class Dog extends Animal {
    constructor(height, weight){
        super (height, weight)
    }
    getTextHeight() {
        return super.getTextHeight();
    }
}

let dog1 = new Dog();
console.log(dog1.getTextHeight());
