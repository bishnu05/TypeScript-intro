
// 1
interface obj{
    titel:string,
    status:boolean,
    id:number
}

let detail: obj ={ 
    titel:"masai",
    status:false,
    id:123456
}

console.log(detail.titel, detail.status, detail.id)

// 2
// function getName{
    
// }

// 3
interface Address{
houseNumber: number,
street:string,
city:string;
state:string;
postalCode:number;
country:string
}

let add: Address ={
    houseNumber: 534,
street:"Nadiha Road",
city:"Durgapur",
state:"West Bengal",
postalCode:713218,
country:"India"
}
console.log(add.houseNumber,add.street,add.city, add.state,add.postalCode,add.country)

//4
interface PersonalDetails{
    phoneNum: number[],
    address: string[],
    email:string,
    firstname:string,
    lastname:string,
    middlename:string
}

let det: PersonalDetails={
    phoneNum: [8918695525],
    address: ["AT Near dgp City colony", "paschim barddhaman", "India"],
    email: "masai@gmail.com",
    firstname: "Masai",
    lastname: "School",
    middlename: "Bangalore"
}

console.log(det.address)

// 4
// function PhoneBook{
//    let arr: []
// }
// PhoneBook.push(det)