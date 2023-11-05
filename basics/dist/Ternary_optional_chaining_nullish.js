"use strict";
var _a, _b;
{
    // Ternary, optional chaining & nullish 
    const age = 19;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    // ternary
    const isadult = age >= 18 ? 'adult' : 'not adult';
    console.log(isadult);
    // nullish coalescing operator
    // null or undefined er opr base kore decision make kore
    const isAuthentication = null;
    const result1 = isAuthentication !== null && isAuthentication !== void 0 ? isAuthentication : 'guest';
    const result2 = isAuthentication ? isAuthentication : 'guest';
    console.log("guest = ", result1, result2);
    const user = {
        name: 'ars',
        address: {
            city: 'dhaka',
            road: 'nameless',
            presentaddress: 'dhaka',
        }
    };
    const permanent = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanent) !== null && _b !== void 0 ? _b : 'no permanent address';
    console.log({ permanent });
}
