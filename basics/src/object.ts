// object same as js
const user :{
    company: 'google';  // literal data type
    // zodi emn case hoy ze datar value change korte dibo na za ache tai
    // tokhn datar valu tai ekta data type kora zay.
    // r etake bole literal data type
    readonly company2: string;
    // readonly thakle value change kora zay na. za ache tai. value fixed 
    fname: string;
    wname: string;
    oname?: string; // optional..value naw thakte pare
    ismarried: boolean;
} = {
    fname: "ars",
    wname: "lan",
    ismarried: true,
    company: 'google',  // literal data type value
    company2: 'olliyo'
}

user.company2 ='ph'
// error dibe. kichui assign kora zabe na