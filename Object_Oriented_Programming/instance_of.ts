{
    // 
    class Animal{
        name: string;
        species: string;
        sound: string;
        constructor( name: string,  species: string,  sound: string ){
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound (){
            console.log(`this ${this.name} says ${this.sound}`)
        }
    }

    class Dog extends Animal{
        constructor(name: string, species: string, sound: string){
            super(name, species, sound)
        }
        makeBarg(){
            console.log(' i am barking')
        }
    }

    class Cat extends Animal{
        constructor(name: string, species: string, sound: string){
            super(name, species, sound)
        }
        makeMew(){
            console.log(' i am meawing')
        }
    }

    // smart way te handle korar jnno function use korte pari

    const isDog = (animal : Animal): animal is Dog =>{
        return animal instanceof Dog;
    }

    const isCat = (animal : Animal):  boolean =>{
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if(isDog(animal)){
            animal.makeBarg()
        }else if(animal instanceof Cat){
            animal.makeMew()
        }else{
            animal.makeSound()
        }
    }

    const dog = new Dog('german', 'dog', 'ghew')
    const cat = new Dog('german', 'dog', 'mew')

    getAnimal(cat);
    getAnimal(dog);

    // 
}