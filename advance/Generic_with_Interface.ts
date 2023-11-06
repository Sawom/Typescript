{
    //
    interface Developer <T,X = null> {
        name: string;
        computer:{
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartwatch: T;
        bike? : X
    }

    type Emilabwatch ={
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper : Developer<Emilabwatch> ={
        name:'ars',
        computer:{
            brand: 'custom',
            model: 'custom',
            releaseYear: 2019,
        },
        smartwatch: {
            brand: 'emilab',
            model: 'kw66',
            display:'amuled'
        }

    }

    interface AppleWatch {
        brand: string;
        model: string;
        display: string;
        heartTract: boolean;
        sleepTrac: boolean;
    }

    interface Yamahabike{
        model: string;
        enginecapacity: string
    }

    const richDeveloper : Developer<AppleWatch, Yamahabike> ={
        name:'lan',
        computer:{
            brand: 'mac',
            model: 'mac model',
            releaseYear: 2019,
        },
        smartwatch: {
            brand: 'apple',
            model: 'mac',
            display:'led',
            heartTract: true,
            sleepTrac: true
        },
        bike:{
            model: 'yamaha',
            enginecapacity: 'many'
        }

    }

}