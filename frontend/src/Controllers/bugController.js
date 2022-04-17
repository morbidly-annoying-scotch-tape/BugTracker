import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data;

    data.push(new bugModel({
        _id:23456789,
        name:"Crash on Load",
        details:"Crashed after 3 seconds",
        version:"V2.0",
        assigned:"Ryan Beasley",
        creator:"Joe Bloggs",
        priority:1,
        time:"23:38",
    }))
    data.push(new bugModel({
        _id:2356789,
        name:"Wont Load",
        details:"Crashed after 3 seconds",
        version:"V2.0",
        assigned:"Ryan Beasley",
        creator:"Joe Bloggs",
        priority:3,
        time:"23:38",
    }))
}

let sorted = data.sort