{
    // Mapped types
    const arrayOfNumbers : number [] = [1,4,5];

    // const arrayOfString : string [] = ['1','4','5'];

    const arrayOfString : string [] = arrayOfNumbers.map( (number) => number.toString() );
    console.log(arrayOfString) // map kore number thke string type convert kore nilam

    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber['height'] //look up type

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    // 
    
    // type AreaString <T> = {
    //    [key in keyof AreaNumber] : string;
    // }

    // T receive korteche
    type AreaString <T> = {
       [key in keyof T] : T[key];
    }

    const area1 : AreaString<{height: string; width:number}> = {
        height : '100',
        width: 50
    }

    // 
}