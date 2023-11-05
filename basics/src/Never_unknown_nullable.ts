{
    // nullable
    const searchName = (value: string | null) =>{
        if(value){
            console.log('searching')
        } else{
            console.log('nothing to search')
        }
    };

    searchName(null);
    // typeof unknown
    const getSpeedMeterPerSecond=(value:unknown) =>{
        if(typeof value === 'number'){
            const convertedSpeed = (value*100)/3600;
            console.log(`the speed is ${convertedSpeed}`)
        }

        else if(typeof value === 'string'){
            const [valueNumber , unit] = value.split(" ");
            const convertedSpeed = ( parseFloat (valueNumber) * 1000)/3600;
            console.log(`the speed is ${convertedSpeed}`)
        }
        else{
            console.log('wrong input')
        }

    }
    getSpeedMeterPerSecond(`1000 km^-1`)
    getSpeedMeterPerSecond(null);

    // never
    // kono type return korbe na zokhn amra janbo tokhn never type use korte pari
    // eta kichu return kore na tai never type bole
    function throwError(msg: string): never{
        throw new Error(msg);
    }

    throwError('kichu bujhi naaaa')

}