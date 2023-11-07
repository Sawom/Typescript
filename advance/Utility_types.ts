{
    // Utility types

    //**  Pick type => tule ana bujhay
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, 'name'|'age'>

    //**  Omit => bad dea
    type ContactInfo = Omit<Person, 'name'|'age' > // ContactInfo theke name. age bad diche

    //** Required
    // ekta type er shb property 1sathe hoye notun type hobe tokhn sheita require type
    type PersonRequire = Required<Person>

    //**  Partial
    //  shb type dhore optional banay dibe
    type PersonPartial = Partial<Person>

    //**  Readonly
    //  kono obj er value change korte parbe na tokhn Readonly
    
    // now use readonly
    type PersonReadonly = Readonly<Person>
    
    const person1 : PersonReadonly = {
        name: 'mr x',
        age: 50,
        contactNo: '0171'
    }

    // person 1 obj er value change korlam
    person1.name = 'mr zsy'; // ekhane error dibe. cz readonly property change kora zay na

    //** */ Record **** most important
    // type Myobj = {
    //     a: string;
    //     b: string;
    // }

     type Myobj = Record <string, string>
                        //<string, string> <key, value>

    // empty obj
    const EmptyObj : Record<string, unknown> = {}

    EmptyObj.isUser = '';

    const obj1 : Myobj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 'dd',
        e: 'ee'
    }


    // 
}