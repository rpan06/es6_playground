import addToDom from './add_to_dom';

export class Person{
    constructor(name){
        this.name = name;
    }
    talk(msg){
        addToDom('h1', `${this.name} says: ${msg}`)
    }
    greet(){
        this.talk(`Hi my name is ${this.name}`)
    }
}

export class SuperPerson extends Person {
    constructor(name, superPower){
        super(name); //required if making extend and constructor. calls it's parent super so we can have access to this. pass in parent constructors. IMPORTANT, not required to have constructor for a class
        this.superPower = superPower;
    }
    saySuperPower(){
        this.talk(`My super power is ${this.superPower}`);
    }
}
