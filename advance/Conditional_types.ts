{
    // Conditional types

    // zodi kono type er man onno ekta typer opor depend kore kono ekta condition er opr base kore, tokhn seta Conditional type.
    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false;

    // nested condition o hoite pare
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane : string;
    }

    // key of operator =>  'bike' | 'car' | 'ship' koreo kora zay. tokhn key of operator type gula niye union kore nijei ekta type hoy


    // car / bike / ship / tractor ache kina
    type CheckVechile<T> = T extends 'bike' | 'car' | 'ship' ? true : false;

    type CheckVechile1<T> = T extends keyof Sheikh ? true : false;

    type Hasbike = CheckVechile <'ship'>
    type Hasplane = CheckVechile1 <'plane'>
    //
}