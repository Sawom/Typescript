"use strict";
{
    // type assertion
    // typescript er ceye amra zodi better type declear korte pari tokhn type assertion
    let anything;
    anything = 'next level';
    anything = 222;
    // (anything as number) ; // type declear korlam
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000); // as number; etai type assertion.
    //    mane ami sure ze ei typer data return korbe tai ts amake trust kore and nije kono type show kore na.
    const result2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
