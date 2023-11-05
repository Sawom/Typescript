{
    // destructuring
    const user ={
    id: 345,
    name: {
        fname: 'abdur',
        mname: 'rashid',
        lname: 'sawom',
        },
    contactno: '0171000000',
    address: 'uganda'
    }
    // object destructure
    const {contactno, name:{mname: midname}} = user;
    // name:{mname: midname} name change korlo


    // array destructure
    const myFriends = ['mir', 'zafar', 'modon','tanha', 'tamanna', 'rinti']
    const[a,b,c, ...rest] = myFriends;
    // a = "mir" , b = 'zafar' , c = 'modon'
    // ...rest = bakishob zotogula thake shb ...rest e ache

    const[, , best ] = myFriends;
    // c er value change kore best rakhlam. eta kora zay. varriable er nam redeclear kora
}