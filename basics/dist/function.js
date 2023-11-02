"use strict";
// function. same as js
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
// arrow function
const addarrow = (num1, num2) => num1 + num2;
add(6, 6);
console.log(add);
// object er vitor function => method bole
const poor = {
    name: 'ars',
    balance: 0,
    addBalance(balance) {
        return `my new balance = ${this.balance + balance}`;
    }
};
const arr = [1, 4, 7];
const newArray = arr.map((elem) => elem * elem);
