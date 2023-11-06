{
    // generics. data specific kore dea zay
    type GenericArray = Array<boolean> //eta shudhu boolean er khetre kaj korbe onno gula na

    // dynamic generic type kora zay
    type GenericArray1<T> = Array<T>

    // const roolnumber : number [] = [3,6,9];
    // const roolnumber : Array<number> = [3,6,9];

    const roolnumber : GenericArray1<number> = [3,6,9];

    // const mentors : string [] = ['mr x', 'mr y', 'mr z'];
    // const mentors : Array<string> = ['mr x', 'mr y', 'mr z'];

    const mentors : GenericArray1<string> = ['mr x', 'mr y', 'mr z'];

    // const boolarray: boolean[] = [true, false, true];

    // type GenericArray = Array<boolean>, ekhan theke porer line ashche
    // const boolarray: Array<boolean> = [true, false, true];

    const boolarray: GenericArray1<boolean> = [true, false, true];

    const user: GenericArray1<{name: string, age: number}> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 110,
    },
  ];

    const add = (x: number , y: number) => x+y;
    add(20,30)

    // generic tuple
    type GenericTuple<X,Y> = [X,Y]
    const human : GenericTuple  <string, string> = ['mr x', 'mrs y']

    const UserWithId: GenericTuple <number , {name: string, email: string}> = [1234, {name: 'ars', email:'a@gmail.com'}]
    

}