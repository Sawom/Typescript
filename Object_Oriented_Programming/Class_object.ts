{
    // oop => class
    class Animal {
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string){
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        // method
        // class er moddhe function hole take bole method

        // arrow function a this kaj kore na tai normal function use korte hobe.
        makeSound (){
            console.log(`this ${this.name} says ${this.sound}`)
        }

    }

    // object
    const dog = new Animal('german sheperd', 'dog', 'ghew');
    const cat = new Animal('persian cat','cat', 'mew')

    // method call
    cat.makeSound();
    dog.makeSound()

    //******* parameter properties
    // evabeo constructor declear kora zay.ete kom likha lage , code clean thake
    class Animal1{
        constructor(public name: string, public species: string, public sound: string ){

        }
        makeSound2 (){
            console.log(`this ${this.name} says ${this.sound}`)
        }
    }

    const dog1 = new Animal1('Indian kutta', 'dog', 'ghew');
    const cat1 = new Animal1('bd bilai','cat', 'mew')

    cat1.makeSound2()
    dog1.makeSound2()
    // 
}