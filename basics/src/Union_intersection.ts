{
    // union types
    // 2tar moddhe 1ta zekono
    type FrontendDev = 'fakibaj' | 'junior'
    type FullstackDev = 'frontend' | 'expert'

    type Devloper = FrontendDev | FullstackDev

    const newDevloper : FrontendDev = 'junior';

    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodType : 'O+' | 'A+' | 'A-'
    }

    const user1: User = {
        name: 'ars',
        gender: 'male',
        bloodType: 'A-'
    }

    // Intersection; 2tar moddhe 2tai thakte hobe

    // frontend developer
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend developer'
    }

    // Backend Developer
    type BackendDevloper = {
        skills: string[];
        designation2: 'Backend developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDevloper

    const fullstack : FullstackDeveloper = {
        skills : ['html', 'css', 'express'],
        designation1: 'Frontend developer',
        designation2: 'Backend developer'
    }



    //
}