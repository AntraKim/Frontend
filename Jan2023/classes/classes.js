class Lecture{
    constructor(){
        // body of Constructor
    }
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get classAvalue(){
        return this.a;
    }

    classmethod(){
        return this.a * this.b * this.c;
    }

    timeOverall = 180;

    static varStaticFields = "hello World";
    static staticClassMethod(){
        //static method body.
    }
}


 class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }
}

class Cat extends Animal {
    constructor(name){
        super(name); 
    }
    speak(){
        console.log(`${this.name} roars or meows or whatever this cat does`);
    }
}

//Json Conversion, Asych and Await, RegEx, Export Import
