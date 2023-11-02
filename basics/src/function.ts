// function. same as js

// normal function
function add(num1:number ,num2:number): number{
    return num1+num2;
}

add(2,2);

// arrow function
const addarrow = (num1:number ,num2:number): number => num1+num2;
add(6,6);
console.log(add)

// object er vitor function => method bole
const poor ={
    name: 'ars',
    balance: 0,
    addBalance(balance:number): string{
        return `my new balance = ${this.balance + balance}`;
    }
}

const arr : number[] = [1,4,7]

const newArray: number[] = arr.map((elem: number): number => elem*elem)
