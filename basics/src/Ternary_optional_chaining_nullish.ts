{
    // Ternary, optional chaining & nullish 
    const age: number = 19;
    if (age >= 18){
        console.log('adult')
    }else{
        console.log('not adult')
    }

    // ternary
    const isadult = age >= 18 ? 'adult' : 'not adult'
    console.log(isadult)

    // nullish coalescing operator
    // null or undefined er opr base kore decision make kore
    const isAuthentication = null
    const result1 = isAuthentication ?? 'guest';
    const result2 = isAuthentication ? isAuthentication  : 'guest';
    console.log("guest = ",result1, result2)
    // ternary operator falsy valur opr kaj kore. nullish empty string er opr kaj kore na.

    // optional chaining
    type User = {
        name: string;
        address:{
            city: string,
            road: string,
            presentaddress: string,
            permanent?: string,
        }
    }

    const user : User = {
        name: 'ars',
        address:{
            city: 'dhaka',
            road: 'nameless',
            presentaddress: 'dhaka',
        }
    }

    const permanent = user?.address?.permanent ?? 'no permanent address';
    console.log({permanent})

}