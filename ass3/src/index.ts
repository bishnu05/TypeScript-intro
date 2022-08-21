
interface User {
    type: string;
    name: string;
    age: number;
    role: string;
}
let user: User= {
    type: 'Admin',
    name: "Masai",
    age: 23,
    role: "student"
}


console.log(user.type, user.name, user.age, user.role)
// interface Admin {
//     type: 'admin';
//     name: string;
//     age: number;
//     role: string;
// }