{// Spread and Rest Operator

// spreed operator
const bros1: string[] = ['mir', 'zafar']

const bros2: string[] = ['mir', 'modon']

bros1.push(...bros2)
// ... tinta dot e spreed operator
// emnite ekta single string nito but array nito na. spreed er jnno array taw niche

// in object spreed operator
const mentors1 ={
    typescript: 'mezba',
    redux: 'mir',
    dbms: 'mizan'
}

const mentors2 ={
    prisma: 'firoz',
    next: 'tanmoy',
    cloud: 'nahid'
}

const mentorslist = {
    ...mentors1,
    ...mentors2
}

// rest operator. element gula niye array banay fele
const greetFriend =(...friends: string[] )=>{
    // console.log(`hi ${friend1} ${friend2}`)
    friends.forEach((friend: string)=> {`hi ${friend}`})
}

greetFriend('mir', 'zafar', 'mokbul', 'baiden')

}