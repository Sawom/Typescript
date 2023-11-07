{
    //*********  typeof => type guard
    type Alphaneumeric = string | number;

    const add = (param1: Alphaneumeric, param2: Alphaneumeric) : Alphaneumeric =>{
            if(typeof param1 === 'number' && typeof param2 === 'number'){
                return param1 + param2;
            } else{
                return param1.toString() + param2.toString();
            }
    };

    const result1 = add(2,3);
    const result2 = add('2','3');
    console.log(result1);
    console.log(result2);

    //*****  in guard
    type NormalUser ={
        name: string
    }

    type AdminlUser ={
        name: string;
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminlUser ) =>{
        if('role' in user){
            console.log(`i am ${user.name} and role ${user.role}`)
        } 
        else{
            console.log(`name = ${user.name}`)
        }
    }

    const normalUser : NormalUser ={
        name : 'mr normal vai',
    }

    const adminUser : AdminlUser ={
        name : 'mr normal vai',
        role: 'admin'
    }

    getUser(adminUser);

    // 
}