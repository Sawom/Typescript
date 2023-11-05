{   
    // type alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactno?: string;
        address: string;
    }



    // const student1:{
    //     name: string;
    //     age: number;
    //     gender: string;
    //     contactno: string;
    //     address: string;

    // } ={
    //     name : 'ars',
    //     age: 26,
    //     gender: 'male',
    //     contactno: '01515000000',
    //     address: 'dhaka'
    // }

    // pura aabr student na likhe ekta typer e banay nilam zar nam alada kore dichi 'Student'
    const student1: Student ={
        name : 'ars',
        age: 26,
        gender: 'male',
        contactno: '01515000000',
        address: 'dhaka'
    }

    const student2: Student ={
        name : 'illusory',
        age: 26,
        gender: 'female',
        address: 'dhaka'
    }

    // manually ekta data type banay nilam bar bar object declear na kore etai type alias
    // object type alias


    // variable o type alias kora zay.
    type UserName = string; // ekhane UserName e ekta type
    type IsAdmin = boolean
    const user: UserName = 'ars'
    const isAdmin : IsAdmin = true;


    // type alias in function
    type Add = (num1: number, num2: number ) => number;

    const add: Add = (num1, num2) => num1 + num2;

    //
}